import React from "react";
import PracticeHero from "../Components/PracticeAreas/PracticeHero";
import PracticeSearch from "../Components/PracticeAreas/PracticeSearch";
import PracticeCards from "../Components/PracticeAreas/PracticeCards";
import PracticeCTA from "../Components/PracticeAreas/PracticeCTA";
import "../Components/PracticeAreas/PracticeAreas.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
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

const PracticeAreas = () => {
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState("");

  // practice area data
  const practiceData = [
    {
      title: "Corporate Law",
      description:
        "Strategic legal counsel for businesses, covering formations, mergers, acquisitions, and complex contract negotiations.",
      icon: FaBalanceScale,
    },
    {
      title: "Criminal Defense",
      description:
        "Aggressive representation and protection of your constitutional rights against various felony and misdemeanor charges.",
      icon: FaGavel,
    },
    {
      title: "Family Law",
      description:
        "Compassionate guidance through divorce, child custody disputes, adoption processes, and sensitive domestic matters.",
      icon: FaUsers,
    },
    {
      title: "Personal Injury",
      description:
        "Dedicated advocacy to help you recover maximum compensation after accidents caused by third-party negligence.",
      icon: FaCarCrash,
    },
    {
      title: "Real Estate Law",
      description:
        "Expert assistance with residential and commercial property transactions, complex leasing, and zoning issues.",
      icon: FaHome,
    },
    {
      title: "Intellectual Property",
      description:
        "Securing your innovations through patent, trademark, and copyright registration and aggressive litigation.",
      icon: FaLightbulb,
    },
    {
      title: "Employment Law",
      description:
        "Representing both employers and employees in workplace disputes, compliance, and labor relations management.",
      icon: FaBriefcase,
    },
    {
      title: "Estate Planning",
      description:
        "Securing your legacy through comprehensive wills, trusts, and strategic long-term asset management planning.",
      icon: FaFileContract,
    },
  ];

  //dont know what to put lol
  const filteredPracticeCards = practiceData.filter((card) =>
    card.title.toLowerCase().includes(searchInput.toLowerCase()),
  );

  return (
    <div className="practice-areas-main-page">
      <button className="practiceArea-Homebtn" onClick={() => navigate("/")}>
        ← Back
      </button>

      <PracticeHero />
      <PracticeSearch
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <PracticeCards cards={filteredPracticeCards} />
      <PracticeCTA />
    </div>
  );
};

export default PracticeAreas;
