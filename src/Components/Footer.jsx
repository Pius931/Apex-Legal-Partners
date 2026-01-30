import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-top">
          {/* Firm Info */}
          <div className="footer-col">
            <h3 className="footer-logo">Apex Legal Partners</h3>
            <p>
              Providing trusted legal representation with integrity, experience,
              and dedication to justice.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/practice-areas">Practice Areas</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Office Info */}
          <div className="footer-col">
            <h4>Our Office</h4>
            <p>
              <FaMapMarkerAlt /> 123 Justice Ave, New York, NY
            </p>
            <p>
              <FaPhoneAlt /> +1 (555) 123-4567
            </p>
            <p>
              <FaEnvelope /> contact@apexlegal.com
            </p>
          </div>

          {/* Newsletter */}
          <div className="footer-col">
            <h4>Newsletter</h4>
            <p>Stay updated with legal insights.</p>

            <div className="newsletter">
              <input type="email" placeholder="Email address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <hr />

        <div className="footer-bottom">
          <span>© 2026 Apex Legal Partners. All rights reserved.</span>

          <div className="footer-legal">
            <Link to="/legal-disclaimer">Legal Disclaimer</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
