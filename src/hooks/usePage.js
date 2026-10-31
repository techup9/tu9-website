import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { absoluteUrl, fullTitle, getPageMeta } from '../seo.js';

function headElement(tag, attr, key) {
  let el = document.head.querySelector(`${tag}[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement(tag);
    el.setAttribute(attr, key);
    document.head.append(el);
  }
  return el;
}

// Keeps the title, description, canonical URL and Open Graph tags in sync with
// the current route. Prerendered pages already contain the same values.
export function usePageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = getPageMeta(pathname);
    const title = fullTitle(meta.title);
    const url = absoluteUrl(meta.path);

    document.title = title;
    headElement('meta', 'name', 'description').content = meta.description;
    headElement('meta', 'property', 'og:type').content = meta.type;
    headElement('meta', 'property', 'og:title').content = title;
    headElement('meta', 'property', 'og:description').content = meta.description;
    headElement('meta', 'property', 'og:url').content = url;
    headElement('link', 'rel', 'canonical').href = url;
  }, [pathname]);
}
