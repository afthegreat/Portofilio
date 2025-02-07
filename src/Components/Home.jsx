import React from "react";
import "./Home.css";
import myPhoto from "./Assets/abel.JPG"; // Replace with your photo

const Home = () => {
  return (
    <div className="container" id="Home">
      <div className="left-section">
        <div className="text-content"> {/* Added a wrapper for text content */}
          <h1>Hi, I'm Abel Ferade</h1> {/* Your name */}
          <h2>Full stack Web Developer</h2> {/* Your title */}
          <p>
          Mastering both front and back end, crafting seamless digital experiences that stand the test of time. {/* Your intro text */}
          </p>
          <div className="buttons"> {/* Wrapper for buttons */}
           <a href="mailto:abelferede916@gmail.com"><button>Hire Me</button></a> 
           <a href={"/lastcv.pdf"} download="lastcv.pdf">
  <button>Download CV</button>
</a>

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