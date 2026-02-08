import { useState } from "react";
import Navbar from "./Components/Navbar.jsx";
import "./App.css";
import Home from "./Pages/Home.jsx";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import PracticeAreas from "./Pages/PracticeAreas.jsx";
import Footer from "./Components/Footer.jsx";
import Contact from "./Pages/Contact.jsx";
import About from "./Pages/About.jsx";
import Attorneys from "./Pages/Attorneys.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/practice-areas" element={<PracticeAreas />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Attorneys />

      <Footer />
    </>
  );
}

export default App;
