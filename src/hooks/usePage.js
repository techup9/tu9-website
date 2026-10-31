import { useEffect, useState } from 'react';

const SITE_NAME = 'TechUp9';

// Sets the document title and the per-page <body> classes the legacy theme CSS relies on.
export function usePage({ title, bodyClass }) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  }, [title]);

  useEffect(() => {
    const classes = bodyClass.split(/\s+/).filter(Boolean);
    document.body.classList.add(...classes);
    return () => document.body.classList.remove(...classes);
  }, [bodyClass]);
}

// Same breakpoints as the legacy theme (THEMEREX menu_responsive / menu_relayout).
const RESPONSIVE_MENU_MAX = 640;
const MENU_RELAYOUT_MAX = 960;

export function useResponsiveMenu() {
  const [isResponsive, setIsResponsive] = useState(() => window.innerWidth < RESPONSIVE_MENU_MAX);

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      const responsive = width < RESPONSIVE_MENU_MAX;
      document.body.classList.toggle('responsive_menu', responsive);
      document.body.classList.toggle('menu_relayout', width < MENU_RELAYOUT_MAX);
      setIsResponsive(responsive);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return isResponsive;
}
