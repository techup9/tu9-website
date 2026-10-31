import { Link } from 'react-router';
import { contact } from '../data/site.js';

export default function Footer() {
  return (
    <>
      <footer className="footer_wrap widget_area scheme_original">
        <div className="footer_wrap_inner widget_area_inner">
          <div className="content_wrap">
            <div className="columns_wrap">
              <aside className="column-1_4 widget widget_socials">
                <div className="widget_inner">
                  <div className="logo">
                    <Link to="/">
                      <img src="/images/logo.png" className="logo_main" alt="TechUp9" />
                      <br />
                      <div className="logo_slogan"></div>
                    </Link>
                  </div>
                  <div className="logo_descr">
                    IT consulting and software engineering for businesses that run on technology. Tell us about your next project.
                  </div>
                </div>
              </aside>
              {/* Empty column keeps the original footer spacing. */}
              <aside className="column-1_4 widget widget_recent_comments"></aside>
              <aside className="column-1_4 widget widget_text" id="contact-us">
                <h5 className="widget_title">Contact Us</h5>
                <div className="textwidget">
                  <h6>CALL US</h6>
                  <p>{contact.phone}</p>
                  <p></p>
                  <h6>EMAIL</h6>
                  <p>
                    <span>{contact.email}</span>
                  </p>
                  <h6>GSTIN</h6>
                  <p>{contact.gstin}</p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright_wrap copyright_style_text scheme_original">
        <div className="copyright_wrap_inner">
          <div className="content_wrap">
            <div className="copyright_text">
              <p>Techup9 © 2023 All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
