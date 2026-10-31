import HeroSlider from '../components/HeroSlider.jsx';
import ServicesCarousel from '../components/ServicesCarousel.jsx';
import { heroSlides, services, servicesIntro, values } from '../data/site.js';
import { usePage } from '../hooks/usePage.js';

const BODY_CLASS =
  'home-page home page body_style_wide body_filled article_style_stretch top_panel_show top_panel_above sidebar_hide sidebar_outer_hide';

function WhatWeDo({ id }) {
  return (
    <section className="light_section" id={id}>
      <div className="container">
        <div className="content_wrap">
          <div className="sc_call_to_action sc_call_to_action_style_1 sc_call_to_action_align_center responsive_margins sc_no_image">
            <div className="sc_call_to_action_info">
              <h6 className="sc_call_to_action_subtitle sc_item_subtitle">what we do</h6>
              <div className="sc_call_to_action_descr sc_item_descr">
                We like to call ourselves as “Idea Nurturers”.<br />
                We are a bunch of individuals for whom technology and digitalization are a passion. Solving the challenges of
                every day life with technological enhancements keeps us driving.
              </div>
              <div className="sc_call_to_action_buttons sc_item_buttons">
                <div className="sc_call_to_action_button sc_item_button">
                  <a
                    href="#"
                    className="sc_button sc_button_square sc_button_style_filled sc_button_size_small sc_button_iconed icon-right margin_bottom_m20"
                  >
                    About Company
                  </a>
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
    <section className="grey_section">
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

function OurValues() {
  const rows = [values.slice(0, 4), values.slice(4, 8)];
  return (
    <section className="grey_section">
      <div className="container">
        <div className="content_wrap">
          <div className="sc_services_wrap">
            <div className="sc_services sc_services_style_services-1 sc_services_type_icons sc_slider_nopagination sc_slider_nocontrols responsive_margins">
              <h2 className="sc_services_title sc_item_title">Our Values</h2>
              <div className="sc_services_descr sc_item_descr">
                Values are integral part of company.
                <br />
                As bunch of individuals, we adhere to following values.
              </div>
              {rows.map((row, r) => (
                <div className="sc_columns columns_wrap" key={r}>
                  {row.map((value, i) => (
                    <div className="column-1_4 column_padding_bottom" key={value.title}>
                      <div
                        className={`sc_services_item sc_services_item_${i + 1} ${i % 2 ? 'even' : 'odd'}${i === 0 ? ' first' : ''}`}
                      >
                        <a href="#" className="sc_services_icon">
                          <span className={`sc_icon ${value.icon}`}> </span>
                        </a>
                        <div className="sc_services_item_content">
                          <h5 className="sc_services_item_title">
                            <a href="#">{value.title}</a>
                          </h5>
                          <div className="sc_services_item_description">
                            <p>{value.text}</p>
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
  usePage({ bodyClass: BODY_CLASS });

  return (
    <>
      <HeroSlider slides={heroSlides} />
      <div className="page_content_wrap page_paddings_no">
        <div>
          <div className="content">
            <article className="post_item post_item_single page type-page">
              <div className="post_content">
                <WhatWeDo id="our-services" />
                <OurServices />
                <WhatWeDo />
                <OurValues />
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
