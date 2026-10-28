'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href) return;

      const hashIndex = href.indexOf('#');
      if (hashIndex === -1) return;

      const targetPath = href.substring(0, hashIndex);
      const targetHash = href.substring(hashIndex);

      const normalizePath = (path) => {
        if (!path || path === '') return window.location.pathname.replace(/\/$/, '') || '/';
        if (path === '/') return '/';
        return path.replace(/\/$/, '');
      };

      const cleanTargetPath = normalizePath(targetPath);
      const cleanCurrentPath = normalizePath(window.location.pathname);

      if (cleanTargetPath === cleanCurrentPath) {
        const id = targetHash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', targetHash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick, { passive: false });
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1);
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return null;
}
