import React from "react";
import "./PracticeAreas.css";

const PracticeCards = () => {
  return (
    <div>
      <section className="practice-cards">
        <div className="practice-card">
          <span className="icon">🏢</span>
          <h3>Corporate Law</h3>
          <p>Legal solutions for businesses, compliance, and transactions.</p>
        </div>

        <div className="practice-card">
          <span className="icon">⚖️</span>
          <h3>Criminal Law</h3>
          <p>Strong defense strategies protecting your rights.</p>
        </div>

        <div className="practice-card">
          <span className="icon">👨‍👩‍👧</span>
          <h3>Family Law</h3>
          <p>Compassionate guidance for sensitive family matters.</p>
        </div>

        <div className="practice-card">
          <span className="icon">🚗</span>
          <h3>Personal Injury</h3>
          <p>Seeking justice and compensation for injury victims.</p>
        </div>

        <div className="practice-card">
          <span className="icon">🏠</span>
          <h3>Real Estate Law</h3>
          <p>Property transactions, disputes, and land matters.</p>
        </div>

        <div className="practice-card">
          <span className="icon">💡</span>
          <h3>Intellectual Property</h3>
          <p>Protecting ideas, trademarks, and innovations.</p>
        </div>

        <div className="practice-card">
          <span className="icon">🧑‍💼</span>
          <h3>Employment Law</h3>
          <p>Workplace rights, contracts, and dispute resolution.</p>
        </div>

        <div className="practice-card">
          <span className="icon">📜</span>
          <h3>Estate Planning</h3>
          <p>Planning wills, trusts, and asset protection.</p>
        </div>
      </section>
    </div>
  );
};

export default PracticeCards;
