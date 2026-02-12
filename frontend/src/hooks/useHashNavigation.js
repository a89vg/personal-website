import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useHashNavigation() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const timer = setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    return () => clearTimeout(timer);
  }, [hash]);
}
