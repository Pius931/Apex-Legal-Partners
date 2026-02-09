import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../styles/navbar.css";
import logo from "../assets/logo/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [Open, setOpen] = useState(false);

  //function closes menu when nav links clicked
  const closeMenu = () => setOpen(false);

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
            <Link to="/">
              <img
                src={logo}
                alt="Apex Legal Partners Logo"
                className="logo-img"
              />
            </Link>
          </div>

          <button className="menu-btn" onClick={() => setOpen(!Open)}>
            ☰
          </button>

          <ul className={`nav-links ${Open ? "open" : ""}`}>
            <li>
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/practice-areas" onClick={closeMenu}>
                Practice Areas
              </Link>
            </li>
            <li>
              <Link to="/attorneys" onClick={closeMenu}>
                Attorneys/Team
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu}>
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
