import React from "react";
import "../styles/practicepreview.css";
import { FaBriefcase, FaGavel, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const PracticePreview = () => {
  return (
    <div>
      <section className="practice-preview">
        <div className="preview-header">
          <h2>Our Practice Areas</h2>
          <Link to="/practice-areas" className="view-all">
            View All Services →
          </Link>
        </div>

        <div className="practice-cards">
          <div className="practice-card">
            <div className="practice-icon">
              <FaBriefcase size={40} />
            </div>
            <h3>Corporate Law</h3>
            <p>
              Advising businesses on corporate structure, compliance, and
              strategic growth.
            </p>
            <Link to="/practice-areas" className="learn-more">
              LEARN MORE
            </Link>
          </div>

          <div className="practice-card">
            <div className="practice-icon">
              <FaGavel size={40} />
            </div>
            <h3>Litigation</h3>
            <p>
              Representing clients in complex civil disputes with proven
              results.
            </p>
            <Link to="/practice-areas" className="learn-more">
              LEARN MORE
            </Link>
          </div>

          <div className="practice-card">
            <div className="practice-icon">
              <FaHome size={40} />
            </div>
            <h3>Real Estate Law</h3>
            <p>
              Legal guidance for property transactions, leases, and disputes.
            </p>
            <Link to="/practice-areas" className="learn-more">
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticePreview;
