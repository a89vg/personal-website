import { useLanguage } from '../../../context/LanguageContext';
import { careerTimeline, techEvolution, keyTransitions } from '../../../data/career';
import SectionTitle from '../../ui/SectionTitle';
import ScrollReveal from '../../ui/ScrollReveal';
import Card from '../../ui/Card';
import TechBadge from '../../ui/TechBadge';

const companyColors = {
  Spring: { border: 'border-l-cyan-400', node: 'bg-cyan-400' },
  Edenred: { border: 'border-l-purple-400', node: 'bg-purple-400' },
  DigitalData: { border: 'border-l-amber-400', node: 'bg-amber-400' },
  YoungLiving: { border: 'border-l-emerald-400', node: 'bg-emerald-400' },
};

export default function CareerTimeline() {
  const { lang, t } = useLanguage();

  return (
    <section id="career" className="py-20 px-6">
      <div className="max-w-screen-xl mx-auto">
        <SectionTitle>{t('cv.career.title')}</SectionTitle>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto mb-20">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-orange to-accent/20" />

          {careerTimeline.map((item, i) => {
            const color = companyColors[item.company] || { border: 'border-l-accent', node: 'bg-accent' };
            return (
              <ScrollReveal key={item.company} delay={i * 0.1}>
                <div className={`relative flex items-start gap-6 mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Node */}
                  <div className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ${color.node} border-4 border-bg z-10 mt-6`} />

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div className="ml-12 md:ml-0 md:w-1/2">
                    <Card className={`border-l-4 ${color.border}`}>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-lg font-bold text-text">{item.company}</h3>
                        <span className="text-xs text-text-muted whitespace-nowrap bg-bg-elevated px-2 py-1 rounded-md">{item.period}</span>
                      </div>
                      <p className="text-accent text-sm font-medium mb-1">
                        {lang === 'en' ? item.roleEn : item.roleEs}
                      </p>
                      <p className="text-text-muted text-sm mb-2">
                        {lang === 'en' ? item.domainEn : item.domainEs}
                      </p>
                      <p className="text-xs text-text-dim">
                        {item.location}
                      </p>
                      <div className="mt-3 pt-3 border-t border-border">
                        <p className="text-xs text-text-dim">
                          <span className="text-text-muted font-medium">{t('cv.career.scale')}:</span>{' '}
                          {lang === 'en' ? item.scaleEn : item.scaleEs}
                        </p>
                      </div>
                    </Card>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Technology Evolution */}
        <ScrollReveal>
          <h3 className="text-2xl font-bold text-center mb-8 text-text">
            {t('cv.career.techEvolution')}
          </h3>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-20 max-w-6xl mx-auto">
          {techEvolution.map((era, i) => (
            <ScrollReveal key={era.era} delay={i * 0.08}>
              <Card className="h-full">
                <p className="text-accent text-xs font-bold mb-1">{era.era}</p>
                <p className="text-sm font-semibold text-text mb-1">{era.company}</p>
                <p className="text-xs text-text-muted mb-3">
                  {lang === 'en' ? era.labelEn : era.labelEs}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {era.techs.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2 py-0.5 bg-bg-elevated border border-border rounded text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Key Transitions */}
        <ScrollReveal>
          <h3 className="text-2xl font-bold text-center mb-8 text-text">
            {t('cv.career.keyTransitions')}
          </h3>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-text-muted font-medium" />
                  <th className="text-left py-3 px-4 text-text-muted font-medium">{t('cv.career.from')}</th>
                  <th className="text-left py-3 px-4 text-text-muted font-medium">{t('cv.career.to')}</th>
                </tr>
              </thead>
              <tbody>
                {keyTransitions.map((row, i) => (
                  <tr key={i} className="border-b border-border/50 hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4 font-medium text-accent">
                      {lang === 'en' ? row.transitionEn : row.transitionEs}
                    </td>
                    <td className="py-3 px-4 text-text-muted">
                      {lang === 'en' ? row.fromEn : row.fromEs}
                    </td>
                    <td className="py-3 px-4 text-text">
                      {lang === 'en' ? row.toEn : row.toEs}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
