import React from "react";
import "./PracticeAreas.css";
import {
  FaBalanceScale,
  FaGavel,
  FaUsers,
  FaCarCrash,
  FaHome,
  FaLightbulb,
  FaBriefcase,
  FaFileContract,
} from "react-icons/fa";

const PracticeCards = () => {
  return (
    <div>
      <section className="practice-cards">
        <div className="practice-card">
          <span className="icon">
            <FaBalanceScale />
          </span>
          <h3>Corporate Law</h3>
          <p>
            Strategic legal counsel for businesses, covering formations,
            mergers, acquisitions, and complex contract negotiations.
          </p>
        </div>

        <div className="practice-card">
          <span className="icon">
            <FaGavel />
          </span>
          <h3>Criminal Defense</h3>
          <p>
            Aggressive representation and protection of your constitutional
            rights against various felony and misdemeanor charges.
          </p>
        </div>

        <div className="practice-card">
          <span className="icon">
            <FaUsers />
          </span>
          <h3>Family Law</h3>
          <p>
            Compassionate guidance through divorce, child custody disputes,
            adoption processes, and sensitive domestic matters.
          </p>
        </div>

        <div className="practice-card">
          <span className="icon">
            <FaCarCrash />
          </span>
          <h3>Personal Injury</h3>
          <p>
            Dedicated advocacy to help you recover maximum compensation after
            accidents caused by third-party negligence.
          </p>
        </div>

        <div className="practice-card">
          <span className="icon">
            <FaHome />
          </span>
          <h3>Real Estate Law</h3>
          <p>
            Expert assistance with residential and commercial property
            transactions, complex leasing, and zoning issues.
          </p>
        </div>

        <div className="practice-card">
          <span className="icon">
            <FaLightbulb />
          </span>
          <h3>Intellectual Property</h3>
          <p>
            Securing your innovations through patent, trademark, and copyright
            registration and aggressive litigation.
          </p>
        </div>

        <div className="practice-card">
          <span className="icon">
            <FaBriefcase />
          </span>
          <h3>Employment Law</h3>
          <p>
            Representing both employers and employees in workplace disputes,
            compliance, and labor relations management.
          </p>
        </div>

        <div className="practice-card">
          <span className="icon">
            <FaFileContract />
          </span>
          <h3>Estate Planning</h3>
          <p>
            Securing your legacy through comprehensive wills, trusts, and
            strategic long-term asset management planning.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PracticeCards;
