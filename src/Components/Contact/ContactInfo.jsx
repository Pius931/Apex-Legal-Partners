import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

const ContactInfo = () => {
  return (
    <div>
      <section className="contact-info-card">
        <h3>
          <FaMapMarkerAlt className="contact-info-icon" /> Our Location
        </h3>

        <div className="info-block">
          <strong>Address</strong>
          <p>
            123 Legal Plaza, Suite 500 <br />
            San Francisco, CA 94105
          </p>
        </div>

        <div className="info-block">
          <strong>Main Phone</strong>
          <p>+1 (555) 000-1234</p>
        </div>

        <div className="info-block">
          <strong>Toll-Free</strong>
          <p>800-LEGAL-PRO</p>
        </div>

        <div className="info-block">
          <strong>Email</strong>
          <p>inquiries@legalpractice.com</p>
        </div>
      </section>
    </div>
  );
};

export default ContactInfo;
