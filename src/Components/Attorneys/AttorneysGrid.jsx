import React from "react";
import "./Attorneys.css";

const AttorneysGrid = ({ attorneys }) => {
  return (
    <div>
      <section className="attorneys-grid">
        {attorneys.map((attorney) => (
          <div key={attorney.id} className="attorney-card">
            <img src={attorney.image} alt={attorney.name} />
            <h2>{attorney.name}</h2>
            <p className="role">{attorney.role}</p>
            <p className="practice">{attorney.practice}</p>
            <button>View Bio</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default AttorneysGrid;
