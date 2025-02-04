import React from "react";
import "./Home.css";
import myPhoto from "./Assets/abel.jpg"; // Replace with your photo

const Home = () => {
  return (
    <div className="container" id="Home">
      <div className="left-section">
        <div className="text-content"> {/* Added a wrapper for text content */}
          <h1>Hi, I'm Abel Ferade</h1> {/* Your name */}
          <h2>Full stack Web Developer</h2> {/* Your title */}
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. {/* Your intro text */}
          </p>
          <div className="buttons"> {/* Wrapper for buttons */}
            <button>Hire Me</button>
            <button>Download CV</button>
          </div>
        </div>
      </div>
      <div className="right-section">
        <img src={myPhoto} alt="Abel Ferade" className="image" /> {/* Your photo and your name in alt text */}
      </div>
    </div>
  );
};

export default Home;