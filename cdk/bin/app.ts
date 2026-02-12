#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import A89vgWebsite from '../lib/a89vg-website';

const app = new cdk.App();

const env = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: 'us-east-1',
};

new A89vgWebsite(app, 'A89vgWebsite', {
  env,
  terminationProtection: true,
});
