import React from "react";
import "../styles/Statsection.css";

const Statsection = () => {
  return (
    <div>
      <section className="stats-section">
        <div className="stat-card">
          <p className="stat-label">Legal Experience</p>
          <h3 className="stat-value">
            25+ <span>Years</span>
          </h3>
        </div>

        <div className="stat-card">
          <p className="stat-label">Success Rate</p>
          <h3 className="stat-value">
            1,200+ <span>Cases</span>
          </h3>
        </div>

        <div className="stat-card">
          <p className="stat-label">Total Settlements</p>
          <h3 className="stat-value">
            $500M+ <span>Won</span>
          </h3>
        </div>
      </section>
    </div>
  );
};

export default Statsection;
