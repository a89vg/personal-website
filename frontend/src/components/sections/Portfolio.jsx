import { useLanguage } from '../../context/LanguageContext';
import { portfolioItems } from '../../data/portfolio';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import TechBadge from '../ui/TechBadge';
import ScrollReveal from '../ui/ScrollReveal';

const badgeVariants = ['cyan', 'purple', 'blue', 'green', 'amber'];

export default function Portfolio() {
  const { lang, t } = useLanguage();

  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-screen-xl mx-auto px-6">
        <SectionTitle>{t('portfolio.title')}</SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioItems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <Card className="h-full">
                <h3 className="text-lg font-semibold bg-gradient-to-r from-accent to-orange bg-clip-text text-transparent mb-4">
                  {lang === 'es' ? item.titleEs : item.titleEn}
                </h3>

                <div className="mb-3">
                  <p className="text-sm text-text-muted">
                    <span className="font-semibold text-text">
                      {t('portfolio.challenge')}
                    </span>
                    {lang === 'es' ? item.challengeEs : item.challengeEn}
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-text-muted">
                    <span className="font-semibold text-text">
                      {t('portfolio.solution')}
                    </span>
                    {lang === 'es' ? item.solutionEs : item.solutionEn}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.techTags.map((tag, j) => (
                    <TechBadge key={tag} variant={badgeVariants[j % badgeVariants.length]}>{tag}</TechBadge>
                  ))}
                </div>

                <div className="pt-3 border-t border-border">
                  <h4 className="text-sm font-semibold text-accent mb-1">
                    {t('portfolio.results')}
                  </h4>
                  <p className="text-sm text-text-muted">
                    {lang === 'es' ? item.resultEs : item.resultEn}
                  </p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
