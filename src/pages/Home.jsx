import { Link } from 'react-router';
import {
  ArrowRight,
  ChartColumn,
  Check,
  Cloud,
  Compass,
  MonitorSmartphone,
  Server,
  Sparkles,
  Workflow,
} from 'lucide-react';
import ContactCta from '../components/ContactCta.jsx';
import { caseStudies, hero, principles, process, sections, services } from '../data/site.js';
import { usePageTitle } from '../hooks/usePage.js';

const SERVICE_ICONS = {
  compass: Compass,
  cloud: Cloud,
  app: MonitorSmartphone,
  server: Server,
  pipeline: Workflow,
  chart: ChartColumn,
  spark: Sparkles,
};

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="lead">{text}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p className="lead">{hero.text}</p>
          <div className="actions">
            <Link to={{ pathname: '/', hash: '#contact' }} className="btn btn-primary">
              Start a conversation <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link to={{ pathname: '/', hash: '#services' }} className="btn btn-ghost">
              Explore services
            </Link>
          </div>
          <ul className="hero-highlights">
            {hero.highlights.map((item) => (
              <li key={item}>
                <Check size={18} aria-hidden="true" /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-panel" aria-hidden="true">
          <div className="hero-card">
            <p className="hero-card-label">What we deliver</p>
            <ul>
              {hero.deliverables.map((item) => (
                <li key={item}>
                  <span className="dot" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHeading {...sections.services} />
        <div className="card-grid">
          {services.map((service) => {
            const Icon = SERVICE_ICONS[service.icon];
            return (
              <article className="card" key={service.title}>
                <span className="card-icon">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            );
          })}
          <Link to={{ pathname: '/', hash: '#contact' }} className="card card-cta">
            <h3>Not sure where to start?</h3>
            <p>Tell us about your challenge and we&apos;ll recommend the right next step.</p>
            <span className="card-link">
              Talk to an expert <ArrowRight size={16} aria-hidden="true" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="section section-tinted" id="work">
      <div className="container">
        <SectionHeading {...sections.work} />
        {caseStudies.map((study) => (
          <article className="story-card" key={study.slug}>
            <div>
              <p className="story-card-client">
                {study.client} &middot; {study.product}
              </p>
              <h3>{study.title}</h3>
              <p>{study.summary}</p>
              <Link to={`/case-studies/${study.slug}`} className="btn btn-primary">
                Read the case study <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
            <dl className="story-card-stats">
              {study.stats.map((stat) => (
                <div key={stat.label}>
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="section" id="approach">
      <div className="container">
        <SectionHeading {...sections.approach} />
        <ol className="steps">
          {process.map((step, i) => (
            <li className="step" key={step.title}>
              <span className="step-number">{String(i + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="section section-tinted" id="why-us">
      <div className="container">
        <SectionHeading {...sections.whyUs} />
        <div className="principles">
          {principles.map((item) => (
            <div className="principle" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  usePageTitle('IT Consulting & Software Engineering');

  return (
    <>
      <Hero />
      <Services />
      <Work />
      <Approach />
      <WhyUs />
      <ContactCta id="contact" />
    </>
  );
}
