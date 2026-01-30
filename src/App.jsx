import { useState } from "react";
import Navbar from "./Components/Navbar.jsx";
import "./App.css";
import Home from "./Pages/Home.jsx";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import PracticeAreas from "./Pages/PracticeAreas.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/practice-areas" element={<PracticeAreas />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
