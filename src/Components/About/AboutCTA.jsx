import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const AboutCTA = () => {
  return (
    <div>
      <section className="about-cta">
        <div className="cta-card">
          <h1>Experience the Excellence Firsthand</h1>

          <p>
            Whether you are a corporation navigating complex regulations or an
            individual seeking justice, our team is ready to provide the
            advocacy you deserve.
          </p>

          <Link to="/contact" className="btn-primary">
            Contact Our Firm
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutCTA;
