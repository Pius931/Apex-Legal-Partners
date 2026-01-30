import React from "react";
import { useNavigate } from "react-router-dom";

const PracticeAreas = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button className="back-btn" onClick={() => navigate("/")}>
        Home
      </button>
      <section className="practice-hero">
        <h1>Practice Areas</h1>
        <p>
          Comprehensive legal services tailored to individuals and businesses.
        </p>
      </section>

      <section className="practice-list">
        <div className="practice-item">
          <h2>Corporate Law</h2>
          <p>Advising businesses on compliance, governance, and growth.</p>
        </div>

        <div className="practice-item">
          <h2>Litigation</h2>
          <p>Strategic representation in civil and commercial disputes.</p>
        </div>

        <div className="practice-item">
          <h2>Real Estate Law</h2>
          <p>Legal support for property transactions and disputes.</p>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreas;
