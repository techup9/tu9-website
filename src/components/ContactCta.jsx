import { Mail, Phone } from 'lucide-react';
import { contact } from '../data/site.js';

export default function ContactCta({
  id,
  title = 'Have a project in mind?',
  text = "Tell us about your goals. We'll get back to you within one business day.",
}) {
  return (
    <section className="section section-cta" id={id}>
      <div className="container">
        <div className="cta">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="cta-actions">
            <a href={`mailto:${contact.email}`} className="btn btn-light">
              <Mail size={18} aria-hidden="true" /> {contact.email}
            </a>
            <a href={contact.phoneHref} className="btn btn-outline-light">
              <Phone size={18} aria-hidden="true" /> {contact.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
