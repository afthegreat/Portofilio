// src/components/Header.jsx
import React from "react";
import "./Header.css";
import { Link } from "react-scroll";
import logo from "./Assets/logo.png";

export default function Header() {
  return (
    <header className="header-container">
       <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav className="nav-links">
        <button className="nav-button" onClick={()=> document.getElementById('Home').scrollIntoView({ behavior: 'smooth'})}>Home</button>
<button className="nav-button" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
  About
</button>
        <button className="nav-button" onClick={()=> document.getElementById('Projects').scrollIntoView({ behavior: 'smooth'})}>Projects</button>
        <button className="nav-button" onClick={()=> document.getElementById('Contact').scrollIntoView({ behavior: 'smooth'})}>Contact Me</button>
      </nav>
     
    </header>
  );
}

