import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import clsx from 'clsx';

const sectionNavItems = {
  '/': [
    { href: '#home', key: 'nav.home' },
    { href: '#about', key: 'nav.about' },
    { href: '#services', key: 'nav.services' },
    { href: '#technologies', key: 'nav.technologies' },
    { href: '#consulting', key: 'nav.consulting' },
    { href: '#portfolio', key: 'nav.portfolio' },
    { href: '#contact', key: 'nav.contact' },
  ],
  '/cv': [
    { href: '#overview', key: 'nav.overview' },
    { href: '#technologies', key: 'nav.technologies' },
    { href: '#career', key: 'nav.career' },
    { href: '#companies', key: 'nav.companies' },
    { href: '#certifications', key: 'nav.certifications' },
  ],
};

const pageLinks = [
  { to: '/', key: 'nav.servicesPage' },
  { to: '/cv', key: 'nav.cv' },
];

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const currentSections = sectionNavItems[pathname] || sectionNavItems['/'];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const pageLinkClasses = (to) =>
    clsx(
      'px-3 py-2 text-sm font-semibold rounded-lg transition-colors duration-200',
      pathname === to
        ? 'text-accent'
        : 'text-text-muted hover:text-text hover:bg-white/5'
    );

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-bg/95 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20'
          : 'bg-bg/70 backdrop-blur-md'
      )}
    >
      <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-bold bg-gradient-to-r from-accent to-orange bg-clip-text text-transparent">
          A89vg
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {/* Page links */}
          {pageLinks.map(({ to, key }) => (
            <Link key={to} to={to} className={pageLinkClasses(to)}>
              {t(key)}
            </Link>
          ))}

          {/* Divider */}
          <div className="mx-2 h-5 border-l border-border" />

          {/* Section links */}
          {currentSections.map(({ href, key }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className="px-3 py-2 text-sm text-text-muted hover:text-accent transition-colors duration-200 rounded-lg hover:bg-white/5"
            >
              {t(key)}
            </a>
          ))}

          {/* Language switcher */}
          <div className="ml-4 flex items-center gap-1 border-l border-border pl-4">
            <button
              onClick={() => setLang('en')}
              aria-label={t('nav.langSwitchEn')}
              aria-pressed={lang === 'en'}
              className={clsx(
                'px-2.5 py-1 text-xs font-semibold rounded-md transition-all duration-200',
                lang === 'en'
                  ? 'bg-accent text-bg'
                  : 'text-text-muted hover:text-text hover:bg-white/5'
              )}
            >
              EN
            </button>
            <button
              onClick={() => setLang('es')}
              aria-label={t('nav.langSwitchEs')}
              aria-pressed={lang === 'es'}
              className={clsx(
                'px-2.5 py-1 text-xs font-semibold rounded-md transition-all duration-200',
                lang === 'es'
                  ? 'bg-accent text-bg'
                  : 'text-text-muted hover:text-text hover:bg-white/5'
              )}
            >
              ES
            </button>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={t('nav.toggleMenu')}
          aria-expanded={isOpen}
        >
          <span className={clsx('block w-6 h-0.5 bg-text transition-all duration-300', isOpen && 'rotate-45 translate-y-2')} />
          <span className={clsx('block w-6 h-0.5 bg-text transition-all duration-300', isOpen && 'opacity-0 scale-x-0')} />
          <span className={clsx('block w-6 h-0.5 bg-text transition-all duration-300', isOpen && '-rotate-45 -translate-y-2')} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={clsx(
          'lg:hidden overflow-hidden transition-all duration-300 bg-bg/95 backdrop-blur-xl border-b border-border',
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {/* Page links */}
          {pageLinks.map(({ to, key }) => (
            <Link
              key={to}
              to={to}
              className={clsx(
                'px-3 py-2.5 font-semibold rounded-lg transition-colors',
                pathname === to
                  ? 'text-accent'
                  : 'text-text-muted hover:text-accent hover:bg-white/5'
              )}
            >
              {t(key)}
            </Link>
          ))}

          {/* Separator */}
          <div className="my-1 border-t border-border" />

          {/* Section links */}
          {currentSections.map(({ href, key }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className="px-3 py-2.5 text-text-muted hover:text-accent transition-colors rounded-lg hover:bg-white/5"
            >
              {t(key)}
            </a>
          ))}

          {/* Language switcher */}
          <div className="flex items-center gap-2 mt-2 pt-3 border-t border-border">
            <button
              onClick={() => setLang('en')}
              aria-label={t('nav.langSwitchEn')}
              aria-pressed={lang === 'en'}
              className={clsx(
                'px-3 py-1.5 text-sm font-semibold rounded-md transition-all',
                lang === 'en' ? 'bg-accent text-bg' : 'text-text-muted hover:bg-white/5'
              )}
            >
              EN
            </button>
            <button
              onClick={() => setLang('es')}
              aria-label={t('nav.langSwitchEs')}
              aria-pressed={lang === 'es'}
              className={clsx(
                'px-3 py-1.5 text-sm font-semibold rounded-md transition-all',
                lang === 'es' ? 'bg-accent text-bg' : 'text-text-muted hover:bg-white/5'
              )}
            >
              ES
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
