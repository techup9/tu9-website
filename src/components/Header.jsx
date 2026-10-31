import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { useResponsiveMenu } from '../hooks/usePage.js';

const NAV_ITEMS = [
  { label: 'Home', to: { pathname: '/', hash: '#home' } },
  { label: 'Our Services', to: { pathname: '/', hash: '#our-services' } },
  { label: 'Our Process', to: { pathname: '/', hash: '#our-process' } },
  { label: 'Blog', to: '/blog', section: '/blog' },
  { label: 'Contact us', to: { pathname: '/', hash: '#contact-us' } },
];

function MenuItems({ pathname, onNavigate }) {
  return NAV_ITEMS.map((item) => {
    const current = item.section && pathname.startsWith(item.section);
    const className = current
      ? 'menu-item menu-item-has-children current-menu-ancestor current-menu-parent'
      : 'menu-item';
    return (
      <li key={item.label} className={className}>
        <Link to={item.to} onClick={onNavigate}>{item.label}</Link>
      </li>
    );
  });
}

export default function Header() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const isResponsive = useResponsiveMenu();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isResponsive) setMenuOpen(false);
  }, [isResponsive]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="top_panel_wrap top_panel_style_6 scheme_original menu_show" id="home">
      <div className="top_panel_wrap_inner top_panel_inner_style_6 top_panel_position_above">
        <div className="top_panel_middle">
          <div className="content_wrap">
            <div className="columns_wrap columns_fluid">
              <div className="column-1_3 contact_logo">
                <div className="logo" style={{ margin: 0, marginTop: 35 }}>
                  <Link to="/">
                    <img
                      src="/images/logo.png"
                      className="logo_main header_logo"
                      alt="TechUp9"
                      style={{ width: isHome ? 150 : 130 }}
                    />
                    <img src="/images/logo.png" className="logo_fixed" alt="" />
                    <br />
                    <div className="logo_slogan"></div>
                  </Link>
                </div>
              </div>
              <div className="column-2_3 menu_main_wrap">
                <a
                  href="#"
                  className="menu_main_responsive_button icon-menu"
                  aria-label="Toggle menu"
                  aria-expanded={menuOpen}
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen((open) => !open);
                  }}
                >
                  Menu
                </a>
                <nav className="menu_main_nav_area">
                  <ul id="menu_main" className="menu_main_nav">
                    <MenuItems pathname={pathname} />
                  </ul>
                </nav>
                <ul className={`menu_main_responsive${menuOpen ? ' is-open' : ''}`}>
                  <MenuItems pathname={pathname} onNavigate={closeMenu} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
