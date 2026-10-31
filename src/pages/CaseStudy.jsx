import { Link, Navigate, useParams } from 'react-router';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import ContactCta from '../components/ContactCta.jsx';
import { caseStudies } from '../data/site.js';

export default function CaseStudy() {
  const { slug } = useParams();
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) return <Navigate to="/" replace />;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Link to={{ pathname: '/', hash: '#work' }} className="back-link">
            <ArrowLeft size={16} aria-hidden="true" /> Client success
          </Link>
          <p className="eyebrow">
            Case study &middot; {study.client}
          </p>
          <h1>{study.title}</h1>
          <p className="lead">{study.summary}</p>
          <dl className="stats">
            {study.stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="container story">
          <article className="story-main">
            <div className="story-block">
              <h2>The challenge</h2>
              {study.challenge.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>

            <div className="story-block">
              <h2>What we built</h2>
              <p>{study.solutionIntro}</p>
              <ul className="feature-list">
                {study.solution.map((item) => (
                  <li key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="story-block">
              <h2>The results</h2>
              <ul className="check-list">
                {study.results.map((text) => (
                  <li key={text}>
                    <Check size={20} aria-hidden="true" /> {text}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <aside className="story-aside">
            <dl className="facts">
              {study.facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
            <p className="aside-title">Capabilities</p>
            <ul className="tags">
              {study.capabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a href={study.clientUrl} className="text-link" target="_blank" rel="noreferrer">
              Visit {study.client} <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </aside>
        </div>
      </section>

      <ContactCta
        title="Planning a platform like this?"
        text="We design, build and run software that businesses depend on for years. Let's talk about yours."
      />
    </>
  );
}
