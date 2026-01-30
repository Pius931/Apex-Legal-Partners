import React from "react";
import Hero from "../Components/Hero.jsx";
import Statsection from "../Components/Statsection.jsx";
import PracticePreview from "../Components/PracticePreview.jsx";
import FirmValues from "../Components/FirmValues.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <Statsection />
      <PracticePreview />
      <FirmValues />
    </div>
  );
};

export default Home;
