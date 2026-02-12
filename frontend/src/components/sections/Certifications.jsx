import { useLanguage } from '../../context/LanguageContext';
import { certifications } from '../../data/certifications';
import { education } from '../../data/education';
import { Award, GraduationCap } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import ScrollReveal from '../ui/ScrollReveal';

export default function Certifications() {
  const { t, lang } = useLanguage();

  return (
    <section id="certifications" className="py-24">
      <div className="max-w-screen-xl mx-auto px-6">
        <SectionTitle>{t('certifications.title')}</SectionTitle>

        {/* Education */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
          {education.map((edu, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <Card className="flex items-start gap-4 h-full">
                <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-accent/10 to-orange/10 border border-accent/20">
                  <GraduationCap className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text">
                    {lang === 'en' ? edu.degreeEn : edu.degreeEs}
                  </h3>
                  <p className="text-sm text-text-muted">{edu.institution}</p>
                  <span className="text-xs text-text-dim">{edu.years}</span>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <Card className="flex items-center gap-4">
                <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-accent/10 to-orange/10 border border-accent/20">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text">{cert.title}</h3>
                  <span className="text-xs text-text-dim">{cert.year}</span>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
