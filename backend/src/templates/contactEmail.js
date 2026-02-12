import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const htmlTemplate = readFileSync(join(__dirname, 'contactEmail.html'), 'utf-8');

const projectTypeNames = {
  dotnet: '.NET Development',
  cloud: 'Cloud Migration',
  legacy: 'Legacy Modernization',
  architecture: 'Technical Architecture',
  consulting: 'Technical Consulting',
  devops: 'DevOps & Automation',
  other: 'Other',
};

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function buildContactEmailHtml(data) {
  const { name, email, company, project, message, teamSize, consultingChallenges, consultingTimeline, consultingEngagement } = data;
  const projectName = projectTypeNames[project] || project;

  let consultingSection = '';
  if (project === 'consulting') {
    consultingSection = `
      <div style="margin-top:15px;padding-top:15px;border-top:1px solid #eee;">
        <h3 style="color:#00d4ff;margin:0 0 10px;">Consulting Details</h3>
        <div style="margin-bottom:12px;">
          <div style="font-weight:bold;color:#00d4ff;font-size:13px;">Team Size:</div>
          <div style="margin-top:4px;padding:8px 12px;background:#f5f5f5;border-left:3px solid #00d4ff;">${escapeHtml(teamSize || 'N/A')}</div>
        </div>
        <div style="margin-bottom:12px;">
          <div style="font-weight:bold;color:#00d4ff;font-size:13px;">Current Challenges:</div>
          <div style="margin-top:4px;padding:8px 12px;background:#f5f5f5;border-left:3px solid #00d4ff;">${escapeHtml(consultingChallenges || 'N/A').replace(/\n/g, '<br>')}</div>
        </div>
        <div style="margin-bottom:12px;">
          <div style="font-weight:bold;color:#00d4ff;font-size:13px;">Preferred Timeline:</div>
          <div style="margin-top:4px;padding:8px 12px;background:#f5f5f5;border-left:3px solid #00d4ff;">${escapeHtml(consultingTimeline || 'N/A')}</div>
        </div>
        <div style="margin-bottom:12px;">
          <div style="font-weight:bold;color:#00d4ff;font-size:13px;">Engagement Model:</div>
          <div style="margin-top:4px;padding:8px 12px;background:#f5f5f5;border-left:3px solid #00d4ff;">${escapeHtml(consultingEngagement || 'N/A')}</div>
        </div>
      </div>`;
  }

  return htmlTemplate
    .replaceAll('{{name}}', escapeHtml(name))
    .replaceAll('{{email}}', escapeHtml(email))
    .replaceAll('{{company}}', escapeHtml(company || 'Not provided'))
    .replaceAll('{{projectName}}', escapeHtml(projectName))
    .replaceAll('{{message}}', escapeHtml(message).replace(/\n/g, '<br>'))
    .replaceAll('{{consultingSection}}', consultingSection)
    .replaceAll('{{timestamp}}', new Date().toISOString());
}

export function buildContactEmailText(data) {
  const { name, email, company, project, message, teamSize, consultingChallenges, consultingTimeline, consultingEngagement } = data;
  const projectName = projectTypeNames[project] || project;

  let text = `New Contact Form Submission\n\n`;
  text += `Name: ${name}\n`;
  text += `Email: ${email}\n`;
  text += `Company: ${company || 'Not provided'}\n`;
  text += `Project Type: ${projectName}\n\n`;
  text += `Message:\n${message}\n`;

  if (project === 'consulting') {
    text += `\n--- Consulting Details ---\n`;
    text += `Team Size: ${teamSize || 'N/A'}\n`;
    text += `Current Challenges: ${consultingChallenges || 'N/A'}\n`;
    text += `Preferred Timeline: ${consultingTimeline || 'N/A'}\n`;
    text += `Engagement Model: ${consultingEngagement || 'N/A'}\n`;
  }

  text += `\n---\nSent from the contact form at a89vg\n`;
  text += `Timestamp: ${new Date().toISOString()}\n`;

  return text;
}
