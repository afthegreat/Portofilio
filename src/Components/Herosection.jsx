import React from 'react';
import './Herosection.css';
import f from './Assets/footer.png';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; 

const Herosection = () => {
  return (
    <section id="Contact" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Have a project in mind?</h1>
          <p>Let's get to work.</p>
          <button onClick={()=> window.location.href="sms:+251989076450?body=hi there!"} className="cta-button">Say Hello</button>
        </div>

        <div className="hero-image">
          <img src={f} alt="Hero" />
        </div>
      </div>

      {/* Curved Section with Contact Info */}
      <div className="curved-section">
        <div className="contact-info">
          <div className="contact-details">
            <a href="tel:+251989076450">
              <FaPhone /> +251 989 076 450
            </a>
          </div>
          <div className="contact-details">
            <a href="mailto:abelferede916@gmail.com">
              <FaEnvelope /> abelferede916@gmaial.com
            </a>
          </div>
          <div className="contact-details">
            <FaMapMarkerAlt /> Addis Abab, lafto 
          </div>
          <div className='footer'>
            <p>@all rights reserved 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
