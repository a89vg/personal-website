import { useLanguage } from '../../context/LanguageContext';
import { serviceKeys, serviceIcons } from '../../data/services';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import ScrollReveal from '../ui/ScrollReveal';

const iconColors = [
  { bg: 'from-purple-400/10 to-purple-400/5', border: 'border-purple-400/20', icon: 'text-purple-400', dot: 'bg-purple-400' },
  { bg: 'from-blue-400/10 to-blue-400/5', border: 'border-blue-400/20', icon: 'text-blue-400', dot: 'bg-blue-400' },
  { bg: 'from-amber-400/10 to-amber-400/5', border: 'border-amber-400/20', icon: 'text-amber-400', dot: 'bg-amber-400' },
  { bg: 'from-cyan-400/10 to-cyan-400/5', border: 'border-cyan-400/20', icon: 'text-cyan-400', dot: 'bg-cyan-400' },
  { bg: 'from-emerald-400/10 to-emerald-400/5', border: 'border-emerald-400/20', icon: 'text-emerald-400', dot: 'bg-emerald-400' },
  { bg: 'from-pink-400/10 to-pink-400/5', border: 'border-pink-400/20', icon: 'text-pink-400', dot: 'bg-pink-400' },
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24">
      <div className="max-w-screen-xl mx-auto px-6">
        <SectionTitle>{t('services.title')}</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceKeys.map((key, i) => {
            const Icon = serviceIcons[key];
            const color = iconColors[i % iconColors.length];
            return (
              <ScrollReveal key={key} delay={i * 0.08}>
                <Card className="h-full">
                  <div className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${color.bg} border ${color.border} mb-5`}>
                    <Icon className={`w-7 h-7 ${color.icon}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-text mb-3">
                    {t(`services.items.${key}.title`)}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-4">
                    {t(`services.items.${key}.desc`)}
                  </p>
                  <ul className="space-y-2">
                    {t(`services.items.${key}.features`).map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-text-muted">
                        <span className={`w-1.5 h-1.5 rounded-full ${color.dot} shrink-0`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
