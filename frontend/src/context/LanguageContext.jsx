import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import en from '../i18n/en.json';
import es from '../i18n/es.json';

const translations = { en, es };

const LanguageContext = createContext(null);

function getNestedValue(obj, path) {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(
    () => localStorage.getItem('preferred-language') || 'es'
  );

  const setLang = useCallback((newLang) => {
    setLangState(newLang);
    localStorage.setItem('preferred-language', newLang);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useCallback(
    (key) => {
      const value = getNestedValue(translations[lang], key);
      if (value !== undefined) return value;
      return getNestedValue(translations.en, key) || key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
