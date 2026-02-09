import React from "react";
import AttorneyHeroImg from "../../assets/images/Attorney-hero-img.png";

const AttorneysHero = () => {
  return (
    <div>
      <section className="attorneys-hero">
        <div className="hero-text">
          <h1>Expert Counsel Dedicated to Your Success</h1>
          <p>
            Meet our team of legal professionals committed to providing
            strategic, result-oriented representation for our clients across the
            nation.
          </p>
        </div>

        <div className="hero-stat-card">
          <img src={AttorneyHeroImg} alt="team" />
          <div className="stat-badge">
            250+ <div> Cases Won this year</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AttorneysHero;
