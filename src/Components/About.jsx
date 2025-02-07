import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import { FaFacebook, FaTelegramPlane, FaLinkedinIn, FaEnvelope } from "react-icons/fa"; // Import motion from Framer Motion


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
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={30} />
      </a>
      <a href="https://t.me/@neverdoit1532" target="_blank" rel="noopener noreferrer">
        <FaTelegramPlane size={30} />
      </a>
      <a href="https://www.linkedin.com/in/abel-ferede-08883a344/" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn size={30} />
      </a>
      <a href="mailto:abelferede916@gmail.com" target="_blank" rel="noopener noreferrer">
        <FaEnvelope size={30} />
      </a>
    </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
