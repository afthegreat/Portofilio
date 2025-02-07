import React from 'react';
import './About.css';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import fb from "./Assets/Socialmedias/facebook.png";
import tg from "./Assets/Socialmedias/telegram.png";
import li from "./Assets/Socialmedias/linkedin.png";
import em from "./Assets/Socialmedias/email.png";

const About = () => {

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <div id="about" className="about-container">
      <div className="about-content">
        <div className="about-header">
          <motion.button
            className="about-me-button"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible" // Trigger animation when in view
            viewport={{ once: false }} // Keep triggering when in view
          >
            <span className="plus-icon">+</span> ABOUT ME
          </motion.button>
        </div>

        <div className="about-intro">
          <motion.h1
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            Hi! I am Abel Ferade
          </motion.h1>
          <motion.p
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            I am a passionate full stack web developer with qualified hands-on experience in web-based projects.
          </motion.p>
        </div>

        <div className="about-details">
          <motion.div
            className="detail-section"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <h3>Contact</h3>
            <p>abelferade916@gmail.com</p>
          </motion.div>
          <motion.div
            className="detail-section"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <h3>Phone</h3>
            <p>+251-989076450</p>
          </motion.div>
          <motion.div
            className="detail-section"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <h3>Date of birth</h3>
            <p>February 03, 2000</p>
          </motion.div>
          <motion.div
            className="detail-section"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <h3>Spoken Languages</h3>
            <p>English - Amharic - Tigirigna</p>
          </motion.div>
          <motion.div
            className="detail-section"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <h3>Interest</h3>
            <p>Music, Reading, Journey</p>
          </motion.div>
          <motion.div
            className="detail-section"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <h3>Social Media</h3>
            <div className="social-icons">
              <a href="www.facebook.com"><img src={fb} alt="Facebook" /></a>
              <a href="https://t.me/@neverdoit1532"><img src={tg} alt="Telegram" /></a>
              <a href="https://www.linkedin.com/in/abel-ferede-08883a344/"><img src={li} alt="LinkedIn" /></a>
              <a href="https://www.emial.com/abelferede916@gmail.com"><img src={em} alt="email" /></a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
