import { Link } from 'react-router';
import HeroSlider from '../components/HeroSlider.jsx';
import ServicesCarousel from '../components/ServicesCarousel.jsx';
import { about, heroSlides, process, services, servicesIntro, values } from '../data/site.js';
import { usePage } from '../hooks/usePage.js';

const BODY_CLASS =
  'home-page home page body_style_wide body_filled article_style_stretch top_panel_show top_panel_above sidebar_hide sidebar_outer_hide';

function WhatWeDo() {
  return (
    <section className="light_section">
      <div className="container">
        <div className="content_wrap">
          <div className="sc_call_to_action sc_call_to_action_style_1 sc_call_to_action_align_center responsive_margins sc_no_image">
            <div className="sc_call_to_action_info">
              <h6 className="sc_call_to_action_subtitle sc_item_subtitle">who we are</h6>
              <div className="sc_call_to_action_descr sc_item_descr">
                {about.headline}
                <br />
                {about.text}
              </div>
              <div className="sc_call_to_action_buttons sc_item_buttons">
                <div className="sc_call_to_action_button sc_item_button">
                  <Link
                    to={{ pathname: '/', hash: '#our-services' }}
                    className="sc_button sc_button_square sc_button_style_filled sc_button_size_small sc_button_iconed icon-right margin_bottom_m20"
                  >
                    Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OurServices() {
  return (
    <section className="grey_section" id="our-services">
      <div className="container">
        <div className="content_wrap">
          <div className="sc_testimonials sc_testimonials_style_testimonials-4 sc_slider_swiper swiper-slider-container sc_slider_nopagination sc_slider_controls sc_slider_controls_bottom sc_slider_height_auto responsive_margins">
            <h2 className="sc_services_title sc_item_title">Our Services</h2>
            <div className="sc_services_descr sc_item_descr">{servicesIntro}</div>
          </div>
          <ServicesCarousel items={services} />
        </div>
      </div>
    </section>
  );
}

function IconGrid({ id, title, description, items }) {
  const rows = [];
  for (let i = 0; i < items.length; i += 4) rows.push(items.slice(i, i + 4));
  return (
    <section className="grey_section" id={id}>
      <div className="container">
        <div className="content_wrap">
          <div className="sc_services_wrap">
            <div className="sc_services sc_services_style_services-1 sc_services_type_icons sc_slider_nopagination sc_slider_nocontrols responsive_margins">
              <h2 className="sc_services_title sc_item_title">{title}</h2>
              <div className="sc_services_descr sc_item_descr">{description}</div>
              {rows.map((row, r) => (
                <div className="sc_columns columns_wrap" key={r}>
                  {row.map((item, i) => (
                    <div className="column-1_4 column_padding_bottom" key={item.title}>
                      <div
                        className={`sc_services_item sc_services_item_${i + 1} ${i % 2 ? 'even' : 'odd'}${i === 0 ? ' first' : ''}`}
                      >
                        <a href="#" className="sc_services_icon">
                          <span className={`sc_icon ${item.icon}`}> </span>
                        </a>
                        <div className="sc_services_item_content">
                          <h5 className="sc_services_item_title">
                            <a href="#">{item.title}</a>
                          </h5>
                          <div className="sc_services_item_description">
                            <p>{item.text}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  usePage({ title: 'IT Consulting & Software Engineering', bodyClass: BODY_CLASS });

  return (
    <>
      <HeroSlider slides={heroSlides} />
      <div className="page_content_wrap page_paddings_no">
        <div>
          <div className="content">
            <article className="post_item post_item_single page type-page">
              <div className="post_content">
                <WhatWeDo />
                <OurServices />
                <IconGrid
                  id="our-process"
                  title="Our Process"
                  description={
                    <>
                      A clear, collaborative approach to every engagement.
                      <br />
                      Built on transparency, short feedback loops and shared ownership.
                    </>
                  }
                  items={process}
                />
                <IconGrid
                  title="Our Values"
                  description={
                    <>
                      The principles behind how we work,
                      <br />
                      with our clients and with each other.
                    </>
                  }
                  items={values}
                />
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
