import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../styles/navbar.css";
import logo from "../assets/logo/logo.png";

const Navbar = () => {
  const [Open, setOpen] = useState(false);

  //Disable scrolling when menu is open
  useEffect(() => {
    if (Open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [Open]);

  return (
    <div>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img
              src={logo}
              alt="Apex Legal Partners Logo"
              className="logo-img"
            />
          </div>

          <button className="menu-btn" onClick={() => setOpen(!Open)}>
            ☰
          </button>

          <ul className={`nav-links ${Open ? "open" : ""}`}>
            <li>Home</li>
            <li>About Us</li>
            <li>Practice Areas</li>
            <li>Attorneys/Team</li>
            <li>Contact us</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
