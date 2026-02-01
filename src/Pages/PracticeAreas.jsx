import React from "react";
import PracticeHero from "../Components/PracticeAreas/PracticeHero";
import PracticeSearch from "../Components/PracticeAreas/PracticeSearch";
import PracticeCards from "../Components/PracticeAreas/PracticeCards";
import PracticeCTA from "../Components/PracticeAreas/PracticeCTA";
import "../Components/PracticeAreas/PracticeAreas.css";
import { useNavigate } from "react-router-dom";

const PracticeAreas = () => {
  const navigate = useNavigate();

  return (
    <div className="practice-areas-main-page">
      <button className="practiceArea-Homebtn" onClick={() => navigate("/")}>
        ← Back
      </button>

      <PracticeHero />
      <PracticeSearch />
      <PracticeCards />
      <PracticeCTA />
    </div>
  );
};

export default PracticeAreas;
