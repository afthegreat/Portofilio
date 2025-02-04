import React from 'react';
import './About.css';

const About = () => {
  return (
<div id="about" className="about-container">
<div className="about-content">
        <div className="about-header">
          <button className="about-me-button">
            <span className="plus-icon">+</span> ABOUT ME
          </button>
        </div>

        <div className="about-intro">
          <h1>Hi! I'm Mitchell Hancock</h1>
          <p>
            I'm Passionate and results-driven UI/UX designer with seven years of experience in crafting intuitive and visually appealing user experiences. Skilled in user research, wireframing, prototyping, and usability testing. Strong collaborator and advocate for user-centered design. Seeking new opportunities to create impactful digital products.
          </p>
        </div>

        <div className="about-details">
          <div className="detail-section">
            <h3>contact</h3>
            <p>mitchellhancock@gmail.com</p>
          </div>
          <div className="detail-section">
            <h3>Phone</h3>
            <p>+1 (123) 456-7890</p>
          </div>
          <div className="detail-section">
            <h3>Date of birth</h3>
            <p>November 28, 1989</p>
          </div>
          <div className="detail-section">
            <h3>Spoken Languages</h3>
            <p>English - French - German</p>
          </div>
          <div className="detail-section">
            <h3>Interest</h3>
            <p>Music, Reading, journey</p>
          </div>
          <div className="detail-section">
            <h3>Social Media</h3>
            <div className="social-icons">
              {/* Add your social media icons here */}
              <a href="#" target="_blank" rel="noopener noreferrer"><img src="path/to/facebook.png" alt="Facebook" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><img src="path/to/instagram.png" alt="Instagram" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><img src="path/to/discord.png" alt="Discord" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><img src="path/to/twitter.png" alt="Twitter" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><img src="path/to/linkedin.png" alt="LinkedIn" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;