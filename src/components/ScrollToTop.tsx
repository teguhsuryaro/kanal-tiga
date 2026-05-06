import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(hash.slice(1));

      if (target) {
        target.scrollIntoView({ block: 'start' });
        return;
      }

      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}
