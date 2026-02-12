import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { companyDeepDives } from '../../../data/career';
import SectionTitle from '../../ui/SectionTitle';
import ScrollReveal from '../../ui/ScrollReveal';
import Card from '../../ui/Card';
import clsx from 'clsx';

export default function CompanyDeepDive() {
  const { lang, t } = useLanguage();
  const [expanded, setExpanded] = useState(0);

  const toggle = (i) => setExpanded(expanded === i ? -1 : i);

  return (
    <section id="companies" className="py-20 px-6">
      <div className="max-w-screen-xl mx-auto">
        <SectionTitle>{t('cv.companies.title')}</SectionTitle>

        <div className="max-w-4xl mx-auto space-y-4">
          {companyDeepDives.map((company, i) => (
            <ScrollReveal key={company.company} delay={i * 0.05}>
              <Card hover={false} className="overflow-hidden">
                {/* Header — clickable */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between text-left cursor-pointer"
                >
                  <div>
                    <h3 className="text-lg font-bold text-text">{company.company}</h3>
                    <p className="text-accent text-sm font-medium">
                      {lang === 'en' ? company.roleEn : company.roleEs}
                    </p>
                    <p className="text-xs text-text-dim mt-1">{company.period}</p>
                  </div>
                  <ChevronDown
                    className={clsx(
                      'w-5 h-5 text-text-muted transition-transform duration-300 flex-shrink-0',
                      expanded === i && 'rotate-180'
                    )}
                  />
                </button>

                {/* Expandable content */}
                <AnimatePresence>
                  {expanded === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-border space-y-6">
                        {/* Domain */}
                        <p className="text-text-muted text-sm leading-relaxed">
                          {lang === 'en' ? company.domainEn : company.domainEs}
                        </p>

                        {/* Products */}
                        <div>
                          <h4 className="text-sm font-bold text-text mb-3">
                            {t('cv.companies.whatWasBuilt')}
                          </h4>
                          <div className="space-y-4">
                            {company.products.map((product) => (
                              <div key={product.name} className="bg-bg-elevated rounded-xl p-4 border border-border/50">
                                <h5 className="text-sm font-semibold text-accent mb-1">{product.name}</h5>
                                <p className="text-xs text-text-muted mb-2">
                                  {lang === 'en' ? product.descriptionEn : product.descriptionEs}
                                </p>
                                <ul className="space-y-1">
                                  {product.features.map((f, fi) => (
                                    <li key={fi} className="text-xs text-text-dim flex items-start gap-2">
                                      <span className="text-accent mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-accent" />
                                      {lang === 'en' ? f.en : f.es}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tech table */}
                        <div>
                          <h4 className="text-sm font-bold text-text mb-3">
                            {t('cv.companies.howItWasBuilt')}
                          </h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-xs">
                              <thead>
                                <tr className="border-b border-border">
                                  <th className="text-left py-2 px-3 text-text-muted font-medium">{t('cv.companies.layer')}</th>
                                  <th className="text-left py-2 px-3 text-text-muted font-medium">{t('cv.companies.technology')}</th>
                                </tr>
                              </thead>
                              <tbody>
                                {company.techTable.map((row, ri) => (
                                  <tr key={ri} className="border-b border-border/30">
                                    <td className="py-2 px-3 text-accent font-medium">{row.layer}</td>
                                    <td className="py-2 px-3 text-text-muted">{row.technology}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* Complexity */}
                        <div>
                          <h4 className="text-sm font-bold text-text mb-3">
                            {t('cv.companies.complexity')}
                          </h4>
                          <ul className="space-y-2">
                            {(lang === 'en' ? company.complexityEn : company.complexityEs).map((item, ci) => (
                              <li key={ci} className="text-xs text-text-muted flex items-start gap-2">
                                <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
