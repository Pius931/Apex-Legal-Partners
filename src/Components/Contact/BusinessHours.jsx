import React from "react";
import "./Contact.css";
import { FaClock } from "react-icons/fa";

const BusinessHours = () => {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday
  const hour = now.getHours();

  const isSunday = day === 0;
  const isSaturday = day === 6;

  let status = "Closed";

  if (!isSunday) {
    if (!isSaturday && hour >= 9 && hour < 18) {
      status = "Open";
    }
    if (isSaturday && hour >= 10 && hour < 14) {
      status = "Open";
    }
  }

  return (
    <div>
      <section className="business-hours-card">
        <h3>
          <FaClock className="business-hours-icon" /> Business Hours
        </h3>

        <p className={`status ${status.toLowerCase()}`}>Status: {status}</p>

        <div className="hours">
          <p>
            <strong>Monday – Friday</strong>
            <br />
            9:00 AM – 6:00 PM
          </p>

          <p>
            <strong>Saturday</strong>
            <br />
            10:00 AM – 2:00 PM
          </p>

          <p>
            <strong>Sunday</strong>
            <br />
            Closed
          </p>
        </div>
      </section>
    </div>
  );
};

export default BusinessHours;
