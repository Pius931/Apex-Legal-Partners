import React from "react";
import { Briefcase, Scale, Award, TrendingUp } from "lucide-react";
import "./About.css";

const AboutTimeline = () => {
  return (
    <div>
      <section className="about-timeline">
        <h4>Our Evolution</h4>
        <h1>The Growth of Excellence</h1>

        <div className="timeline">
          <div className="timeline-item left">
            <div className="timeline-content">
              <h3>Firm Founded</h3>
              <p>
                Established with a mission to deliver justice-driven advocacy.
              </p>
            </div>
            <span className="timeline-icon">
              <Briefcase />
            </span>
          </div>

          <div className="timeline-item right">
            <div className="timeline-content">
              <h3>Expanded Practice Areas</h3>
              <p>Introduced corporate, family, and real estate law services.</p>
            </div>
            <span className="timeline-icon">
              <Scale />
            </span>
          </div>

          <div className="timeline-item left">
            <div className="timeline-content">
              <h3>National Recognition</h3>
              <p>Awarded for excellence in client representation.</p>
            </div>
            <span className="timeline-icon">
              <Award />
            </span>
          </div>

          <div className="timeline-item right">
            <div className="timeline-content">
              <h3>Continued Growth</h3>
              <p>Serving clients across jurisdictions with modern solutions.</p>
            </div>
            <span className="timeline-icon">
              <TrendingUp />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutTimeline;
