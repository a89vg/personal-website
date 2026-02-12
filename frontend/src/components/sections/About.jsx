import { useLanguage } from '../../context/LanguageContext';
import { Lightbulb, Handshake, BookOpen, Crosshair } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import ScrollReveal from '../ui/ScrollReveal';

const highlights = [
  { key: 'problemSolver', Icon: Lightbulb, color: 'cyan' },
  { key: 'collaborative', Icon: Handshake, color: 'purple' },
  { key: 'learner', Icon: BookOpen, color: 'amber' },
  { key: 'detail', Icon: Crosshair, color: 'emerald' },
];

const colorMap = {
  cyan: { bg: 'from-cyan-400/10 to-cyan-400/5', border: 'border-cyan-400/20', icon: 'text-cyan-400' },
  purple: { bg: 'from-purple-400/10 to-purple-400/5', border: 'border-purple-400/20', icon: 'text-purple-400' },
  amber: { bg: 'from-amber-400/10 to-amber-400/5', border: 'border-amber-400/20', icon: 'text-amber-400' },
  emerald: { bg: 'from-emerald-400/10 to-emerald-400/5', border: 'border-emerald-400/20', icon: 'text-emerald-400' },
};

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24">
      <div className="max-w-screen-xl mx-auto px-6">
        <SectionTitle>{t('about.title')}</SectionTitle>

        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-text-muted leading-relaxed mb-6">{t('about.lead')}</p>
            <p className="text-text-muted leading-relaxed mb-4">{t('about.p1')}</p>
            <p className="text-text-muted leading-relaxed">{t('about.p2')}</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map(({ key, Icon, color }, i) => {
            const c = colorMap[color];
            return (
              <ScrollReveal key={key} delay={i * 0.1}>
                <Card className="text-center h-full">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${c.bg} border ${c.border} mx-auto mb-4`}>
                    <Icon className={`w-6 h-6 ${c.icon}`} />
                  </div>
                  <h4 className="font-semibold text-text mb-2">
                    {t(`about.highlights.${key}`)}
                  </h4>
                  <p className="text-sm text-text-muted">
                    {t(`about.highlights.${key}Desc`)}
                  </p>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
