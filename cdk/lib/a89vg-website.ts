import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigatewayv2';
import * as integrations from 'aws-cdk-lib/aws-apigatewayv2-integrations';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import { Construct } from 'constructs';
import * as path from 'path';
import { execSync } from 'child_process';
import * as fs from 'fs';

export default class A89vgWebsite extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const ssmRecipientEmail = '/app/personal-website/config/recipientEmail';
    const domainName =
      this.node.tryGetContext('domainName') || 'www.a89vg.net';
    const certificateArn = this.node.tryGetContext('certificateArn');
    if (!certificateArn) {
      throw new Error(
        'Missing required context variable "certificateArn". ' +
        'Provide it via cdk.context.json or -c certificateArn=<arn>',
      );
    }

    // ── Backend ──────────────────────────────────────────────────────

    const backendPath = path.join(__dirname, '../../backend');

    // Lambda function
    const contactFn = new lambda.Function(this, 'ContactFunction', {
      runtime: lambda.Runtime.NODEJS_20_X,
      handler: 'lambda.handler',
      code: lambda.Code.fromAsset(backendPath, {
        bundling: {
          image: lambda.Runtime.NODEJS_20_X.bundlingImage,
          command: ['bash', '-c', 'echo "Docker bundling not used"'],
          local: {
            tryBundle(outputDir: string) {
              execSync(
                'pnpm install --frozen-lockfile --node-linker=hoisted',
                { cwd: backendPath, stdio: 'inherit' }
              );
              fs.cpSync(backendPath, outputDir, {
                recursive: true,
                filter: (src) =>
                  !src.includes('.pnpm') &&
                  !src.includes('.git') &&
                  !src.endsWith('pnpm-lock.yaml'),
              });
              return true;
            },
          },
        },
      }),
      timeout: cdk.Duration.seconds(10),
      memorySize: 256,
      environment: {
        SSM_RECIPIENT_EMAIL: ssmRecipientEmail,
        AWS_SES_REGION: this.region,
        USE_SES: 'true',
      },
    });

    // Resolve recipient email from SSM at deploy time to scope SES permissions
    const recipientEmail = ssm.StringParameter.valueForStringParameter(
      this, ssmRecipientEmail,
    );

    // Grant SES permissions scoped to the specific identity
    contactFn.addToRolePolicy(
      new iam.PolicyStatement({
        actions: ['ses:SendEmail', 'ses:SendRawEmail'],
        resources: [
          `arn:aws:ses:${this.region}:${this.account}:identity/${recipientEmail}`,
        ],
      })
    );

    // Grant SSM read access for recipient email parameter
    contactFn.addToRolePolicy(
      new iam.PolicyStatement({
        actions: ['ssm:GetParameter'],
        resources: [
          `arn:aws:ssm:${this.region}:${this.account}:parameter${ssmRecipientEmail}`,
        ],
      })
    );

    // HTTP API Gateway
    const httpApi = new apigateway.HttpApi(this, 'ContactApi', {
      corsPreflight: {
        allowOrigins: ['https://www.a89vg.net'],
        allowMethods: [apigateway.CorsHttpMethod.POST],
        allowHeaders: ['content-type'],
      },
    });

    httpApi.addRoutes({
      path: '/api/contact',
      methods: [apigateway.HttpMethod.POST],
      integration: new integrations.HttpLambdaIntegration(
        'ContactIntegration',
        contactFn
      ),
    });

    httpApi.addRoutes({
      path: '/api/health',
      methods: [apigateway.HttpMethod.GET],
      integration: new integrations.HttpLambdaIntegration(
        'HealthIntegration',
        contactFn
      ),
    });

    // Apply rate limiting at API Gateway level
    const defaultStage = httpApi.defaultStage?.node.defaultChild as apigateway.CfnStage;
    if (defaultStage) {
      defaultStage.defaultRouteSettings = {
        throttlingBurstLimit: 10,
        throttlingRateLimit: 5,
      };
    }

    const apiUrl = httpApi.apiEndpoint;

    // ── Frontend ─────────────────────────────────────────────────────

    // S3 bucket for static site
    const siteBucket = new s3.Bucket(this, 'SiteBucket', {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    // Security headers
    const responseHeadersPolicy = new cloudfront.ResponseHeadersPolicy(
      this,
      'SecurityHeaders',
      {
        securityHeadersBehavior: {
          contentTypeOptions: { override: true },
          frameOptions: {
            frameOption: cloudfront.HeadersFrameOption.DENY,
            override: true,
          },
          referrerPolicy: {
            referrerPolicy:
              cloudfront.HeadersReferrerPolicy.STRICT_ORIGIN_WHEN_CROSS_ORIGIN,
            override: true,
          },
          xssProtection: { protection: true, modeBlock: true, override: true },
          strictTransportSecurity: {
            accessControlMaxAge: cdk.Duration.days(365),
            includeSubdomains: true,
            override: true,
          },
        },
      }
    );

    // SSL certificate for custom domain
    const certificate = acm.Certificate.fromCertificateArn(
      this,
      'SiteCert',
      certificateArn
    );

    // CloudFront distribution
    const distribution = new cloudfront.Distribution(this, 'Distribution', {
      domainNames: [domainName],
      certificate,
      defaultBehavior: {
        origin: origins.S3BucketOrigin.withOriginAccessControl(siteBucket),
        viewerProtocolPolicy:
          cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
        responseHeadersPolicy,
      },
      defaultRootObject: 'index.html',
      errorResponses: [
        {
          httpStatus: 403,
          responseHttpStatus: 200,
          responsePagePath: '/index.html',
          ttl: cdk.Duration.minutes(5),
        },
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: '/index.html',
          ttl: cdk.Duration.minutes(5),
        },
      ],
    });

    // Add API Gateway as additional origin for /api/* routes
    const apiDomain = cdk.Fn.select(2, cdk.Fn.split('/', apiUrl));
    distribution.addBehavior('/api/*', new origins.HttpOrigin(apiDomain), {
      viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      allowedMethods: cloudfront.AllowedMethods.ALLOW_ALL,
      cachePolicy: cloudfront.CachePolicy.CACHING_DISABLED,
      originRequestPolicy: cloudfront.OriginRequestPolicy.ALL_VIEWER_EXCEPT_HOST_HEADER,
    });

    // Deploy site to S3
    new s3deploy.BucketDeployment(this, 'DeploySite', {
      sources: [
        s3deploy.Source.asset(path.join(__dirname, '../../frontend/dist')),
      ],
      destinationBucket: siteBucket,
      distribution,
      distributionPaths: ['/*'],
    });

    // ── Outputs ──────────────────────────────────────────────────────

    new cdk.CfnOutput(this, 'ApiEndpoint', {
      value: apiUrl,
      description: 'API Gateway endpoint URL',
    });

    new cdk.CfnOutput(this, 'DistributionDomainName', {
      value: distribution.distributionDomainName,
      description: 'CloudFront distribution URL',
    });

    new cdk.CfnOutput(this, 'BucketName', {
      value: siteBucket.bucketName,
    });

    new cdk.CfnOutput(this, 'SiteUrl', {
      value: `https://${domainName}`,
      description: 'Custom domain URL',
    });
  }
}
