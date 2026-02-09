import React from "react";
import "./PracticeAreas.css";

const PracticeSearch = ({ searchInput, setSearchInput }) => {
  return (
    <div>
      <section className="practice-search">
        <input
          type="text"
          placeholder="find a Specific legal service or speciality..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </section>
    </div>
  );
};

export default PracticeSearch;
