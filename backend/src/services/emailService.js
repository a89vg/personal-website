import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { SSMClient, GetParameterCommand } from '@aws-sdk/client-ssm';
import { buildContactEmailHtml, buildContactEmailText } from '../templates/contactEmail.js';

const USE_SES = process.env.USE_SES !== 'false';

const ses = USE_SES
  ? new SESClient({ region: process.env.AWS_REGION || 'us-east-1' })
  : null;

let cachedRecipient;

async function getRecipient() {
  if (cachedRecipient) return cachedRecipient;

  const paramName = process.env.SSM_RECIPIENT_EMAIL;
  if (!paramName) throw new Error('SSM_RECIPIENT_EMAIL environment variable is not set');

  const ssm = new SSMClient({ region: process.env.AWS_REGION || 'us-east-1' });
  const { Parameter } = await ssm.send(new GetParameterCommand({ Name: paramName }));
  cachedRecipient = Parameter.Value;
  return cachedRecipient;
}

export async function sendContactEmail(data) {
  const htmlBody = buildContactEmailHtml(data);
  const textBody = buildContactEmailText(data);

  if (!USE_SES) {
    console.log('--- Contact Form Submission ---');
    console.log(textBody);
    console.log('--- End ---');
    return;
  }

  const recipient = await getRecipient();

  const command = new SendEmailCommand({
    Source: `A89vg Website <${recipient}>`,
    Destination: { ToAddresses: [recipient] },
    ReplyToAddresses: [data.email],
    Message: {
      Subject: { Data: 'New Contact Form Submission from A89vg', Charset: 'UTF-8' },
      Body: {
        Html: { Data: htmlBody, Charset: 'UTF-8' },
        Text: { Data: textBody, Charset: 'UTF-8' },
      },
    },
  });

  await ses.send(command);
}
