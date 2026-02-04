import React from "react";
import { ShieldCheck, Target, Users, Lightbulb } from "lucide-react";
import "./About.css";

const AboutPillars = () => {
  return (
    <div>
      <section className="about-pillars">
        <h3 className="just-change">Our Foundation</h3>
        <h1>The Pillars of Our Legal Practice</h1>

        <p className="pillars-intro">
          We operate on a foundation of professional rigor and unwavering
          ethics. These four core values guide every consultation and courtroom
          appearance
        </p>

        <div className="pillars-grid">
          <div className="pillar-card">
            <ShieldCheck />
            <h3>Integrity</h3>
            <p>
              Honest and transparent legal counsel is the cornerstone of every
              case we handle. No hidden agendas.
            </p>
          </div>

          <div className="pillar-card">
            <Target />
            <h3>Precision</h3>
            <p>
              Meticulous attention to detail in document preparation and
              litigation strategy for optimal legal outcomes.
            </p>
          </div>

          <div className="pillar-card">
            <Users />
            <h3>Client-Centricity</h3>
            <p>
              Your goals are at the heart of our legal strategy. We listen
              first, then act decisively.
            </p>
          </div>

          <div className="pillar-card">
            <Lightbulb />
            <h3>Innovation</h3>
            <p>
              Leveraging modern legal technology and creative problem-solving to
              solve complex legal hurdles.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPillars;
