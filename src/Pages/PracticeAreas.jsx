import React from "react";
import PracticeHero from "../Components/PracticeAreas/PracticeHero";
import PracticeSearch from "../Components/PracticeAreas/PracticeSearch";
import PracticeCards from "../Components/PracticeAreas/PracticeCards";
import PracticeCTA from "../Components/PracticeAreas/PracticeCTA";

const PracticeAreas = () => {
  return (
    <>
      <h1>Our Practice Areas</h1>
      <PracticeHero />
      <PracticeSearch />
      <PracticeCards />
      <PracticeCTA />
    </>
  );
};

export default PracticeAreas;
