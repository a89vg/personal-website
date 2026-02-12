const MAX_LENGTHS = {
  name: 100,
  email: 254,
  company: 100,
  message: 5000,
  consultingField: 2000,
};

const VALID_PROJECT_TYPES = [
  'dotnet', 'cloud', 'legacy', 'architecture', 'consulting', 'devops', 'other',
];

function sanitize(value) {
  if (typeof value !== 'string') return '';
  return value.trim().replace(/<[^>]*>/g, '');
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateContact(req, res, next) {
  const { name, email, project, message } = req.body || {};
  const errors = [];

  const cleanName = sanitize(name);
  const cleanEmail = sanitize(email);
  const cleanProject = sanitize(project);
  const cleanMessage = sanitize(message);

  if (!cleanName || cleanName.length < 2) {
    errors.push('Name is required and must be at least 2 characters');
  }
  if (cleanName.length > MAX_LENGTHS.name) {
    errors.push(`Name must not exceed ${MAX_LENGTHS.name} characters`);
  }
  if (!cleanEmail || !isValidEmail(cleanEmail)) {
    errors.push('Valid email is required');
  }
  if (cleanEmail.length > MAX_LENGTHS.email) {
    errors.push(`Email must not exceed ${MAX_LENGTHS.email} characters`);
  }
  if (!cleanProject) {
    errors.push('Project type is required');
  }
  if (cleanProject && !VALID_PROJECT_TYPES.includes(cleanProject)) {
    errors.push(`Invalid project type. Must be one of: ${VALID_PROJECT_TYPES.join(', ')}`);
  }
  if (!cleanMessage || cleanMessage.length < 10) {
    errors.push('Message is required and must be at least 10 characters');
  }
  if (cleanMessage.length > MAX_LENGTHS.message) {
    errors.push(`Message must not exceed ${MAX_LENGTHS.message} characters`);
  }

  // Validate consulting-specific fields
  if (cleanProject === 'consulting') {
    const teamSize = sanitize(req.body.teamSize);
    const challenges = sanitize(req.body.consultingChallenges);
    const timeline = sanitize(req.body.consultingTimeline);
    const engagement = sanitize(req.body.consultingEngagement);

    if (!teamSize) errors.push('Team size is required for consulting');
    if (teamSize.length > MAX_LENGTHS.consultingField) {
      errors.push(`Team size must not exceed ${MAX_LENGTHS.consultingField} characters`);
    }
    if (!challenges || challenges.length < 10) errors.push('Challenges description is required (min 10 chars)');
    if (challenges.length > MAX_LENGTHS.consultingField) {
      errors.push(`Challenges must not exceed ${MAX_LENGTHS.consultingField} characters`);
    }
    if (!timeline) errors.push('Timeline is required for consulting');
    if (timeline.length > MAX_LENGTHS.consultingField) {
      errors.push(`Timeline must not exceed ${MAX_LENGTHS.consultingField} characters`);
    }
    if (!engagement) errors.push('Engagement model is required for consulting');
    if (engagement.length > MAX_LENGTHS.consultingField) {
      errors.push(`Engagement model must not exceed ${MAX_LENGTHS.consultingField} characters`);
    }
  }

  if (errors.length > 0) {
    return res.status(400).json({ success: false, message: 'Validation failed', errors });
  }

  // Attach sanitized data
  req.body.name = cleanName;
  req.body.email = cleanEmail;
  req.body.company = sanitize(req.body.company)?.slice(0, MAX_LENGTHS.company);
  req.body.project = cleanProject;
  req.body.message = cleanMessage;

  if (cleanProject === 'consulting') {
    req.body.teamSize = sanitize(req.body.teamSize);
    req.body.consultingChallenges = sanitize(req.body.consultingChallenges);
    req.body.consultingTimeline = sanitize(req.body.consultingTimeline);
    req.body.consultingEngagement = sanitize(req.body.consultingEngagement);
  }

  next();
}
