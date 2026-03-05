import React, { useState, useContext } from "react";
import "./Header.css";
import logo from "./Assets/logo.png";
import { ThemeContext } from "../ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
      </nav>
      <div className="mobile-controls">
        <button className="theme-toggle mobile-theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
}
