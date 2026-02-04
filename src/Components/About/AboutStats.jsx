import React from "react";
import "./About.css";

const AboutStats = () => {
  return (
    <div>
      <section className="about-stats">
        <div className="stats-grid">
          <div className="stat-card">
            <h2>25+</h2>
            <p>Years of Experience</p>
          </div>

          <div className="stat-card">
            <h2>1,200+</h2>
            <p>Successful Resolutions</p>
          </div>

          <div className="stat-card">
            <h2>40+</h2>
            <p>Expert Attorneys</p>
          </div>

          <div className="stat-card">
            <h2>98%</h2>
            <p>Client Retention</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutStats;
