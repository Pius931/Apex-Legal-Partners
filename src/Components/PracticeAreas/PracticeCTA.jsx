import React from "react";
import "./PracticeAreas.css";

const PracticeCTA = () => {
  return (
    <div>
      <section className="practice-cta">
        <h2>Need Expert Legal Advice?</h2>
        <p>
          Speak with our experienced attorneys today and get the guidance you
          deserve. Our team of specialists is ready to discuss your case. Book a
          free consultation today and take the first step towards a resolution.
        </p>

        <div className="cta-buttons">
          <button className="primary-btn">Book Free Consultation</button>

          <button className="secondary-btn"> +1 (234) 567-890</button>
        </div>
      </section>
    </div>
  );
};

export default PracticeCTA;
