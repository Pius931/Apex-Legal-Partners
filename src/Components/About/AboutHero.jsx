import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const AboutHero = () => {
  return (
    <div>
      <section className="about-hero">
        <div className="about-hero-card">
          <h4>Our Mission</h4>
          <h1>Experience the Excellence Firsthand</h1>

          <p>
            Whether you are a corporation navigating complex regulations or an
            individual seeking justice, our team is ready to provide the
            advocacy you deserve.
          </p>

          <Link to="/team" className="btn-primary">
            Meet Our Partners
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutHero;
