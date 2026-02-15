import { useStat } from "react";
import Navbar from "./Components/Navbar.jsx";
import "./App.css";
import Home from "./Pages/Home.jsx";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import PracticeAreas from "./Pages/PracticeAreas.jsx";
import Footer from "./Components/Footer.jsx";
import Contact from "./Pages/Contact.jsx";
import About from "./Pages/About.jsx";
import Attorneys from "./Pages/Attorneys.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/practice-areas" element={<PracticeAreas />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/attorneys" element={<Attorneys />} />
        <Route path="/About" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
