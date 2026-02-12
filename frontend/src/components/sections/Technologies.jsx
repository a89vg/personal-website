import { useLanguage } from '../../context/LanguageContext';
import { techCategories } from '../../data/technologies';
import SectionTitle from '../ui/SectionTitle';
import TechBadge from '../ui/TechBadge';
import ScrollReveal from '../ui/ScrollReveal';

const categoryColors = [
  { border: 'border-l-purple-400', text: 'text-purple-400', badge: 'purple' },
  { border: 'border-l-cyan-400', text: 'text-cyan-400', badge: 'cyan' },
  { border: 'border-l-blue-400', text: 'text-blue-400', badge: 'blue' },
  { border: 'border-l-emerald-400', text: 'text-emerald-400', badge: 'green' },
  { border: 'border-l-amber-400', text: 'text-amber-400', badge: 'amber' },
  { border: 'border-l-cyan-400', text: 'text-cyan-400', badge: 'cyan' },
];

export default function Technologies() {
  const { lang, t } = useLanguage();

  return (
    <section id="technologies" className="py-24">
      <div className="max-w-screen-xl mx-auto px-6">
        <SectionTitle>{t('technologies.title')}</SectionTitle>

        <ScrollReveal>
          <p className="text-text-muted text-center max-w-2xl mx-auto mb-16">
            {t('technologies.intro')}
          </p>
        </ScrollReveal>

        <div className="space-y-10">
          {techCategories.map((cat, i) => {
            const color = categoryColors[i];
            return (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className={`bg-bg-card border border-border border-l-4 ${color.border} rounded-2xl p-6`}>
                  <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${color.text}`}>
                    {lang === 'es' ? cat.titleEs : cat.titleEn}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {cat.items.map((item) => (
                      <TechBadge key={item} variant={color.badge}>{item}</TechBadge>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
