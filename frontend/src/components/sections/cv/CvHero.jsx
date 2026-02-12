import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import StatCounter from '../../ui/StatCounter';
import Button from '../../ui/Button';

export default function CvHero() {
  const { t } = useLanguage();

  return (
    <section id="overview" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-orange/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/3 rounded-full blur-[150px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(var(--color-text-dim) 1px, transparent 1px), linear-gradient(90deg, var(--color-text-dim) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-screen-xl mx-auto px-6 text-center pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-8xl font-black bg-gradient-to-r from-accent via-orange to-accent bg-clip-text text-transparent mb-4"
        >
          A89vg
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl md:text-2xl text-text-muted font-light mb-6"
        >
          {t('cv.hero.subtitle')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-text-muted max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t('cv.hero.description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-12 md:gap-20 mb-12"
        >
          <StatCounter value={4} label={t('cv.hero.stats.companies')} />
          <StatCounter value={100} suffix="+" label={t('cv.hero.stats.technologies')} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button to="/">{t('cv.hero.cta')}</Button>
          <Button to="/#contact" variant="secondary">{t('cv.hero.ctaContact')}</Button>
        </motion.div>
      </div>
    </section>
  );
}
