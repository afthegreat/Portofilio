import React from 'react';
import './About.css';
import Aos from 'aos';
import  "aos/dist/aos.css";
import { useEffect } from "react";
import fb from "./Assets/Socialmedias/facebook.png";
import tg from "./Assets/Socialmedias/telegram.png";
import li from "./Assets/Socialmedias/linkedin.png";
import em from "./Assets/Socialmedias/email.png";


const About = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
<div id="about" className="about-container">
<div className="about-content">
        <div className="about-header" >
          <button className="about-me-button">
            <span className="plus-icon">+</span> ABOUT ME
          </button>
        </div>

        <div className="about-intro" >
          <h1>Hi! I am Abel Ferade</h1>
          <p>
            I am a passionate full stack web developer with qualified hands on exprience in web-based projects.</p>
        </div>

        <div className="about-details" >
          <div className="detail-section">
            <h3>contact</h3>
            <p>abelferade916@gmail.com</p>
          </div>
          <div className="detail-section" >
            <h3>Phone</h3>
            <p>+251-989076450</p>
          </div>

          <div className="detail-section" >
            <h3>Date of birth</h3>
            <p>February 03, 2000</p>
          </div>
          <div className="detail-section">
            <h3>Spoken Languages</h3>
            <p>English - Amharic - Tigirigna</p>
          </div>
          <div className="detail-section">
            <h3>Interest</h3>
            <p>Music, Reading, journey</p>
          </div>
          <div className="detail-section" >
            <h3>Social Media</h3>
            <div className="social-icons">

              <a href="www.facebook.com" ><img src={fb}alt="Facebook" /></a>
              <a href="https://t.me/@neverdoit1532"><img src={tg} alt="Telegram" /></a>
              <a href="https://www.linkedin.com/in/abel-ferede-08883a344/" ><img src={li} alt="LinkedIn" /></a>
              <a href="https://www.emial.com/abelferede916@gmail.com" ><img src={em} alt="email" /></a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;