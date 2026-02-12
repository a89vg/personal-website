import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-border bg-bg-card">
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="max-w-screen-xl mx-auto px-6 py-8 text-center">
        <p className="text-text-muted text-sm">
          {t('footer.copyright').replace('{{year}}', new Date().getFullYear())}
        </p>
        <p className="text-text-dim text-xs mt-1">{t('footer.tagline')}</p>
      </div>
    </footer>
  );
}
