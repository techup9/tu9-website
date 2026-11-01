import { Link } from 'react-router';
import { contact } from '../data/site.js';
import { NAV_ITEMS } from './Header.jsx';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <img src="/images/logo.png" alt="TechUp9" className="footer-logo" width="563" height="182" />
          <p className="muted">
            IT consulting and software engineering for businesses that run on technology.
          </p>
        </div>
        <nav aria-label="Footer">
          <h2 className="footer-title">Company</h2>
          <ul className="footer-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.hash}>
                <Link to={{ pathname: '/', hash: item.hash }}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link to={{ pathname: '/', hash: '#contact' }}>Contact</Link>
            </li>
          </ul>
        </nav>
        <div>
          <h2 className="footer-title">Contact</h2>
          <ul className="footer-links">
            <li>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <a href={contact.phoneHref}>{contact.phone}</a>
            </li>
            <li className="muted">GSTIN {contact.gstin}</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        {/* The year can differ from the prerendered HTML after a new year starts. */}
        <p suppressHydrationWarning>© {new Date().getFullYear()} TechUp9. All rights reserved.</p>
      </div>
    </footer>
  );
}
