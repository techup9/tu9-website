import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

function useScrollOnNavigate() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash, key]);
}

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const headerHeight = document.querySelector('.top_panel_wrap')?.offsetHeight ?? 0;
      setVisible(window.scrollY > headerHeight);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#"
      className={`scroll_to_top icon-angle-up${visible ? ' show' : ''}`}
      title="Scroll to top"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    ></a>
  );
}

export default function Layout() {
  useScrollOnNavigate();

  return (
    <>
      <div className="body_wrap">
        <div className="page_wrap">
          <div className="top_panel_fixed_wrap"></div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
      <ScrollToTopButton />
    </>
  );
}
