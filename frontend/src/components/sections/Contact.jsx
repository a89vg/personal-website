import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Globe, Clock } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import ScrollReveal from '../ui/ScrollReveal';
import clsx from 'clsx';

const initialForm = {
  name: '',
  email: '',
  company: '',
  project: '',
  message: '',
  teamSize: '',
  consultingChallenges: '',
  consultingTimeline: '',
  consultingEngagement: '',
};

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [statusMessage, setStatusMessage] = useState('');

  const isConsulting = form.project === 'consulting';

  // Listen for consulting CTA from Consulting section
  useEffect(() => {
    const handler = () => {
      setForm((prev) => ({ ...prev, project: 'consulting' }));
    };
    window.addEventListener('select-consulting', handler);
    return () => window.removeEventListener('select-consulting', handler);
  }, []);

  const validate = useCallback(() => {
    const errs = {};

    if (!form.name.trim()) errs.name = t('contact.validation.nameRequired');
    else if (form.name.trim().length < 2) errs.name = t('contact.validation.nameMinLength');

    if (!form.email.trim()) errs.email = t('contact.validation.emailRequired');
    else if (!isValidEmail(form.email.trim())) errs.email = t('contact.validation.emailInvalid');

    if (!form.project) errs.project = t('contact.validation.projectRequired');

    if (!form.message.trim()) errs.message = t('contact.validation.messageRequired');
    else if (form.message.trim().length < 10) errs.message = t('contact.validation.messageMinLength');

    if (isConsulting) {
      if (!form.teamSize) errs.teamSize = t('contact.validation.teamSizeRequired');
      if (!form.consultingChallenges.trim()) errs.consultingChallenges = t('contact.validation.challengesRequired');
      else if (form.consultingChallenges.trim().length < 10) errs.consultingChallenges = t('contact.validation.challengesMinLength');
      if (!form.consultingTimeline) errs.consultingTimeline = t('contact.validation.timelineRequired');
      if (!form.consultingEngagement) errs.consultingEngagement = t('contact.validation.engagementRequired');
    }

    return errs;
  }, [form, isConsulting, t]);

  const validateField = (name) => {
    const errs = validate();
    setErrors((prev) => {
      const next = { ...prev };
      if (errs[name]) next[name] = errs[name];
      else delete next[name];
      return next;
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on input if it had one
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('idle');

    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setStatusMessage(t('contact.validation.successMessage'));
        setForm(initialForm);
      } else {
        setStatus('error');
        setStatusMessage(data.message || t('contact.validation.errorMessage'));
      }
    } catch {
      setStatus('error');
      setStatusMessage(t('contact.validation.errorMessage'));
    }
  };

  const inputClasses = (name) =>
    clsx(
      'w-full bg-bg-elevated border rounded-xl px-4 py-3 text-sm text-text placeholder-text-dim outline-none transition-all duration-200',
      'focus:border-accent focus:ring-1 focus:ring-accent/30',
      errors[name] ? 'border-error' : 'border-border'
    );

  const projectTypes = ['dotnet', 'cloud', 'legacy', 'architecture', 'consulting', 'devops', 'other'];
  const teamSizes = ['1-3', '4-10', '11-25', '26-50', '51+'];
  const timelineKeys = ['urgent', '1-3months', '3-6months', 'flexible'];
  const engagementKeys = ['hourly', 'project', 'retainer', 'notsure'];

  return (
    <section id="contact" className="py-24">
      <div className="max-w-screen-xl mx-auto px-6">
        <SectionTitle>{t('contact.title')}</SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <ScrollReveal>
            <div>
              <h3 className="text-xl font-semibold text-text mb-4">{t('contact.heading')}</h3>
              <p className="text-text-muted leading-relaxed mb-8">{t('contact.description')}</p>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-accent mb-1">{t('contact.location')}</h4>
                    <p className="text-text-muted text-sm">{t('contact.locationValue')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-accent mb-1">{t('contact.availability')}</h4>
                    <p className="text-text-muted text-sm">{t('contact.availabilityValue')}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={0.1}>
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-success/10 border border-success/30 rounded-xl p-4 text-sm text-success"
                  >
                    <p className="font-semibold">{t('contact.validation.successTitle')}</p>
                    <p>{statusMessage}</p>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-error/10 border border-error/30 rounded-xl p-4 text-sm text-error"
                  >
                    <p className="font-semibold">{t('contact.validation.serverErrorTitle')}</p>
                    <p>{statusMessage}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text mb-1.5">
                  {t('contact.form.name')} *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={() => validateField('name')}
                  aria-required="true"
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={inputClasses('name')}
                />
                {errors.name && <p id="name-error" className="text-xs text-error mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text mb-1.5">
                  {t('contact.form.email')} *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={() => validateField('email')}
                  aria-required="true"
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={inputClasses('email')}
                />
                {errors.email && <p id="email-error" className="text-xs text-error mt-1">{errors.email}</p>}
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-text mb-1.5">
                  {t('contact.form.company')}
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={handleChange}
                  className={inputClasses('company')}
                />
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="project" className="block text-sm font-medium text-text mb-1.5">
                  {t('contact.form.projectType')} *
                </label>
                <select
                  id="project"
                  name="project"
                  value={form.project}
                  onChange={handleChange}
                  onBlur={() => validateField('project')}
                  aria-required="true"
                  aria-describedby={errors.project ? 'project-error' : undefined}
                  className={inputClasses('project')}
                >
                  <option value="">{t('contact.form.projectTypePlaceholder')}</option>
                  {projectTypes.map((pt) => (
                    <option key={pt} value={pt}>
                      {t(`contact.form.projectTypes.${pt}`)}
                    </option>
                  ))}
                </select>
                {errors.project && <p id="project-error" className="text-xs text-error mt-1">{errors.project}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text mb-1.5">
                  {t('contact.form.message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  onBlur={() => validateField('message')}
                  placeholder={t('contact.form.messagePlaceholder')}
                  aria-required="true"
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={inputClasses('message')}
                />
                {errors.message && <p id="message-error" className="text-xs text-error mt-1">{errors.message}</p>}
              </div>

              {/* Conditional Consulting Fields */}
              <AnimatePresence>
                {isConsulting && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-4 pt-4 border-t border-border">
                      <h3 className="text-sm font-semibold text-accent">
                        {t('contact.form.consultingDetails')}
                      </h3>

                      {/* Team Size */}
                      <div>
                        <label htmlFor="teamSize" className="block text-sm font-medium text-text mb-1.5">
                          {t('contact.form.teamSize')} *
                        </label>
                        <select
                          id="teamSize"
                          name="teamSize"
                          value={form.teamSize}
                          onChange={handleChange}
                          onBlur={() => validateField('teamSize')}
                          aria-required="true"
                          aria-describedby={errors.teamSize ? 'teamSize-error' : undefined}
                          className={inputClasses('teamSize')}
                        >
                          <option value="">{t('contact.form.teamSizePlaceholder')}</option>
                          {teamSizes.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                        {errors.teamSize && <p id="teamSize-error" className="text-xs text-error mt-1">{errors.teamSize}</p>}
                      </div>

                      {/* Challenges */}
                      <div>
                        <label htmlFor="consultingChallenges" className="block text-sm font-medium text-text mb-1.5">
                          {t('contact.form.challenges')} *
                        </label>
                        <textarea
                          id="consultingChallenges"
                          name="consultingChallenges"
                          rows={3}
                          value={form.consultingChallenges}
                          onChange={handleChange}
                          onBlur={() => validateField('consultingChallenges')}
                          placeholder={t('contact.form.challengesPlaceholder')}
                          aria-required="true"
                          aria-describedby={errors.consultingChallenges ? 'consultingChallenges-error' : undefined}
                          className={inputClasses('consultingChallenges')}
                        />
                        {errors.consultingChallenges && (
                          <p id="consultingChallenges-error" className="text-xs text-error mt-1">{errors.consultingChallenges}</p>
                        )}
                      </div>

                      {/* Timeline */}
                      <div>
                        <label htmlFor="consultingTimeline" className="block text-sm font-medium text-text mb-1.5">
                          {t('contact.form.timeline')} *
                        </label>
                        <select
                          id="consultingTimeline"
                          name="consultingTimeline"
                          value={form.consultingTimeline}
                          onChange={handleChange}
                          onBlur={() => validateField('consultingTimeline')}
                          aria-required="true"
                          aria-describedby={errors.consultingTimeline ? 'consultingTimeline-error' : undefined}
                          className={inputClasses('consultingTimeline')}
                        >
                          <option value="">{t('contact.form.timelinePlaceholder')}</option>
                          {timelineKeys.map((k) => (
                            <option key={k} value={k}>
                              {t(`contact.form.timelineOptions.${k}`)}
                            </option>
                          ))}
                        </select>
                        {errors.consultingTimeline && (
                          <p id="consultingTimeline-error" className="text-xs text-error mt-1">{errors.consultingTimeline}</p>
                        )}
                      </div>

                      {/* Engagement */}
                      <div>
                        <label htmlFor="consultingEngagement" className="block text-sm font-medium text-text mb-1.5">
                          {t('contact.form.engagement')} *
                        </label>
                        <select
                          id="consultingEngagement"
                          name="consultingEngagement"
                          value={form.consultingEngagement}
                          onChange={handleChange}
                          onBlur={() => validateField('consultingEngagement')}
                          aria-required="true"
                          aria-describedby={errors.consultingEngagement ? 'consultingEngagement-error' : undefined}
                          className={inputClasses('consultingEngagement')}
                        >
                          <option value="">{t('contact.form.engagementPlaceholder')}</option>
                          {engagementKeys.map((k) => (
                            <option key={k} value={k}>
                              {t(`contact.form.engagementOptions.${k}`)}
                            </option>
                          ))}
                        </select>
                        {errors.consultingEngagement && (
                          <p id="consultingEngagement-error" className="text-xs text-error mt-1">{errors.consultingEngagement}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className={clsx(
                  'w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300',
                  'bg-gradient-to-r from-accent to-orange text-bg',
                  'hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5',
                  'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0'
                )}
              >
                {status === 'sending' ? t('contact.form.sending') : t('contact.form.submit')}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
