import { useLanguage } from '../../context/LanguageContext';
import { consultingAreaKeys, consultingAreaIcons, methodologyPhaseKeys } from '../../data/consulting';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Button from '../ui/Button';
import ScrollReveal from '../ui/ScrollReveal';

export default function Consulting() {
  const { t } = useLanguage();

  const handleCtaClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      // Dispatch a custom event that the Contact component will listen for
      window.dispatchEvent(new CustomEvent('select-consulting'));
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="consulting" className="py-24">
      <div className="max-w-screen-xl mx-auto px-6">
        <SectionTitle>{t('consulting.title')}</SectionTitle>

        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-accent font-medium mb-4">{t('consulting.intro')}</p>
            <p className="text-text-muted leading-relaxed">{t('consulting.lead')}</p>
          </div>
        </ScrollReveal>

        {/* Consulting areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {consultingAreaKeys.map((key, i) => {
            const Icon = consultingAreaIcons[key];
            return (
              <ScrollReveal key={key} delay={i * 0.08}>
                <Card className="h-full">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-accent/10 to-orange/10 border border-accent/20 mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-text mb-2">
                    {t(`consulting.areas.${key}.title`)}
                  </h3>
                  <p className="text-sm text-text-muted">
                    {t(`consulting.areas.${key}.desc`)}
                  </p>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Methodology */}
        <ScrollReveal>
          <h3 className="text-xl font-semibold text-center text-text mb-8">
            {t('consulting.methodology.title')}
          </h3>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {methodologyPhaseKeys.map((key, i) => (
            <ScrollReveal key={key} delay={i * 0.15}>
              <div className="relative bg-bg-card border border-border rounded-2xl p-6 text-center shadow-md shadow-black/20">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent to-orange flex items-center justify-center text-bg font-bold text-sm mx-auto mb-4">
                  {i + 1}
                </div>
                <h4 className="font-semibold text-text mb-2">
                  {t(`consulting.methodology.phases.${key}.title`)}
                </h4>
                <p className="text-sm text-text-muted">
                  {t(`consulting.methodology.phases.${key}.desc`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Notes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <ScrollReveal>
            <div className="bg-bg-card border-l-2 border-accent rounded-r-xl p-5">
              <p
                className="text-sm text-text-muted"
                dangerouslySetInnerHTML={{ __html: t('consulting.notes.packages') }}
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="bg-bg-card border-l-2 border-orange rounded-r-xl p-5">
              <p
                className="text-sm text-text-muted"
                dangerouslySetInnerHTML={{ __html: t('consulting.notes.workMode') }}
              />
            </div>
          </ScrollReveal>
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center">
            <Button href="#contact" onClick={handleCtaClick}>
              {t('consulting.cta')}
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
