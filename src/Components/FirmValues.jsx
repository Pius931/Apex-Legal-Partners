import React from "react";
import { FaCheckCircle, FaHistory, FaHeadset } from "react-icons/fa";
import "../styles/FirmValues.css";
import ceoImg from "../assets/images/ceo_img.png";
import { Link } from "react-router-dom";

const FirmValues = () => {
  return (
    <div>
      <section className="firm-values">
        {/* Image + intro */}
        <div className="values-intro">
          <img src={ceoImg} alt="Managing Partner" className="values-image" />

          <div className="values-text">
            <h2>Firm Values</h2>
            <h3>Defending Your Interests with Integrity</h3>

            <p>
              Our firm was built on the foundation of trust and relentless
              pursuit of justice. We combine the resources of a large firm with
              the personalized attention of a boutique practice.
            </p>
          </div>
        </div>

        {/* Values list */}
        <div className="values-list">
          <div className="value-card">
            <div className="value-header">
              <FaCheckCircle className="value-icon" />
              <h4>Proven Results</h4>
            </div>
            <p>
              Over $500M recovered for our clients across various jurisdictions.
            </p>
          </div>

          <div className="value-card">
            <div className="value-header">
              <FaHistory className="value-icon" />
              <h4>25+ Years Experience</h4>
            </div>
            <p>
              Deep local and national legal expertise cultivated over decades.
            </p>
          </div>

          <div className="value-card">
            <div className="value-header">
              <FaHeadset className="value-icon" />
              <h4>24/7 Dedicated Support</h4>
            </div>
            <p>
              Constant communication and transparent case updates via our secure
              portal.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="values-cta">
          <Link to="/about" className="values-btn">
            About Our Legacy
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FirmValues;
