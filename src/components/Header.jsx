import { useState } from 'react';
import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';

export const NAV_ITEMS = [
  { label: 'Services', hash: '#services' },
  { label: 'Client work', hash: '#work' },
  { label: 'Approach', hash: '#approach' },
  { label: 'Why TechUp9', hash: '#why-us' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={close} aria-label="TechUp9 home">
          <img src="/images/logo.png" alt="TechUp9" width="563" height="182" />
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav id="site-nav" className={`site-nav${open ? ' is-open' : ''}`} aria-label="Main">
          {NAV_ITEMS.map((item) => (
            <Link key={item.hash} to={{ pathname: '/', hash: item.hash }} onClick={close}>
              {item.label}
            </Link>
          ))}
          <Link to={{ pathname: '/', hash: '#contact' }} className="btn btn-primary btn-sm" onClick={close}>
            Let&apos;s talk
          </Link>
        </nav>
      </div>
    </header>
  );
}
