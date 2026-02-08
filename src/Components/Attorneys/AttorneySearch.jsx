import React from "react";
import "./Attorneys.css";

const AttorneySearch = ({ searchTerm, setSearchTerm }) => {
  return (
    <div>
      <section className="attorney-search">
        <input
          type="text"
          placeholder="Search by area of practice"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </section>
    </div>
  );
};

export default AttorneySearch;
