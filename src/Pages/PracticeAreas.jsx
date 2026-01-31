import React from "react";
import { useNavigate } from "react-router-dom";

const PracticeAreas = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button className="back-btn" onClick={() => navigate("/")}>
        Home
      </button>
      <main className="practice-areas">
        <section className="practice-hero">
          <h1>Our Practice Areas</h1>
          <p>
            We provide comprehensive legal services tailored to protect your
            rights and achieve the best possible outcomes.
          </p>
        </section>

        <section className="practice-list">
          <div className="practice-card">
            <h3>Corporate Law</h3>
            <p>
              Advising businesses on compliance, transactions, and governance.
            </p>
          </div>

          <div className="practice-card">
            <h3>Litigation</h3>
            <p>Strategic representation in complex disputes and court cases.</p>
          </div>

          <div className="practice-card">
            <h3>Real Estate Law</h3>
            <p>Legal guidance for property transactions and development.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PracticeAreas;
