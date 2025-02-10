import React, { useState } from "react";
import "./Header.css";
import logo from "./Assets/logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close menu after selection
  };

  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <button className="nav-button" onClick={() => handleNavClick('Home')}>Home</button>
        <button className="nav-button" onClick={() => handleNavClick('about')}>About</button>
        <button className="nav-button" onClick={() => handleNavClick('Projects')}>Projects</button>
        <button className="nav-button" onClick={() => handleNavClick('Services')}>Services</button>
        <button className="nav-button" onClick={() => handleNavClick('Contact')}>Contact me</button>
      </nav>
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
}
