import { LOGO_URL } from "../utils/contact";
import { CDN_URL_FACEBOOK } from "../utils/contact";
import { CDN_URL_INSTAGRAM } from "../utils/contact";
import { CDN_URL_TWITTER } from "../utils/contact";    

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <div className="logo-name">
          <img
            className="logoimg"
            src={LOGO_URL}
          />
          <div className="footer-name">npmEats</div>
        </div>
        <div className="copyright">© 2026 npmEats Limited </div>
      </div>

      <div className="company">
        {" "}
        Company
        <ul className="company-content">
          <li>About Us</li>
          <li>npm corporate</li>
          <li>Careers</li>
          <li>Team</li>
        </ul>
      </div>
      <div className="contact">
        Contact Us
        <ul className="contact-details">
          <li>Help & Support</li>
          <li>Partner with us</li>
          <li>Ride with us</li>
        </ul>
      </div>
      <div className="available">
        Available in
        <ul className="city-list">
          <li>Mumbai</li>
          <li>Pune</li>
        </ul>
        <span className="social-links">
          Social Links
          <div className="social-icons">
            <img
              className="social-icon"
              src={CDN_URL_FACEBOOK}
            />
            <img
              className="social-icon"
              src={CDN_URL_INSTAGRAM}
            />
            <img
              className="social-icon"
              src={CDN_URL_TWITTER}
            />
          </div>
        </span>
      </div>
    </div>
  );
};
export default Footer;