import React from "react";
import "../styles/hero.css";

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="goldentext-bg">
              <h4>ESTABLISHED 1995</h4>
            </div>
            <h1>
              Trusted Legal <span className="goldentext">Solutions</span>{" "}
            </h1>
            <p>
              Apex Legal Partners provides expert legal representation with
              integrity and professionalism.
            </p>
            <button className="hero-btn">Get Legal Help</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
