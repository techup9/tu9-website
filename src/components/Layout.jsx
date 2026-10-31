import { useEffect } from 'react';
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

export default function Layout() {
  useScrollOnNavigate();

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
