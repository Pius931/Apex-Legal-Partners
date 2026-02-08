import React, { useState } from "react";
import AttorneysHero from "../Components/Attorneys/AttorneysHero";
import AttorneySearch from "../Components/Attorneys/AttorneySearch";
import AttorneysGrid from "../Components/Attorneys/AttorneysGrid";
import "../Components/Attorneys/Attorneys.css";

const Attorneys = () => {
  // list of attorneys (temporary data)
  const attorneysData = [
    {
      id: 1,
      name: "Michael Carter",
      role: "Senior Partner",
      practice: "Corporate Law",
      image: "/images/attorney1.jpg",
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      role: "Criminal Defense Attorney",
      practice: "Criminal Defence",
      image: "/images/attorney2.jpg",
    },
    {
      id: 3,
      name: "David Chen",
      role: "Family Law Specialist",
      practice: "Family Law",
      image: "/images/attorney3.jpg",
    },
    {
      id: 4,
      name: "Laura Bennett",
      role: "Litigation Expert",
      practice: "Personal Injury",
      image: "/images/attorney4.jpg",
    },
    {
      id: 5,
      name: "James Wilson",
      role: "Property Attorney",
      practice: "Real Estate Law",
      image: "/images/attorney5.jpg",
    },
    {
      id: 6,
      name: "Emily Rodriguez",
      role: "IP Consultant",
      practice: "Intellectual Property",
      image: "/images/attorney6.jpg",
    },
    {
      id: 7,
      name: "Robert King",
      role: "Employment Lawyer",
      practice: "Employment Law",
      image: "/images/attorney7.jpg",
    },
    {
      id: 8,
      name: "Olivia Harper",
      role: "Estate Planner",
      practice: "Estate Planning",
      image: "/images/attorney8.jpg",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredAttorneys = attorneysData.filter((attorney) =>
    attorney.practice.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="attorneys-page">
      <AttorneysHero />
      <AttorneySearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <AttorneysGrid attorneys={filteredAttorneys} />
    </div>
  );
};

export default Attorneys;
