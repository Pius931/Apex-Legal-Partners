import React from "react";
import AboutHero from "../Components/About/AboutHero.jsx";
import AboutStats from "../Components/About/AboutStats.jsx";
import AboutPillars from "../Components/About/AboutPillars.jsx";
import AboutTimeline from "../Components/About/AboutTimeline.jsx";
import AboutCTA from "../Components/About/AboutCTA.jsx";
import "../Components/About/About.css";

const About = () => {
  return (
    <div className="about-main-page">
      <AboutHero />
      <AboutStats />
      <AboutPillars />
      <AboutTimeline />
      <AboutCTA />
    </div>
  );
};

export default About;
