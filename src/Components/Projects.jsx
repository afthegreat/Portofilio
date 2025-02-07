import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import A from "./Assets/abel.JPG";

const projects = [
  {
    title: "Broker website system",
    description: "User-friendly buyer and seller agent system.",
    details:
      "Description: A web-based system for connecting sellers with buyers efficiently.<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>Technologies Used</title><style>body {font-family: Arial, sans-serif;} .technologies {margin-top: 20px;} .technologies h2 {text-decoration: underline;} .tech-category {margin-bottom: 15px;} .tech-category span {font-weight: bold;} ul {list-style-type: none; padding: 0;}</style></head><body><div class='technologies'><h2>Technologies Used</h2><div class='tech-category'><span>Front-end:</span><ul><li>Language: JavaScript</li><li>Library: React</li></ul></div><div class='tech-category'><span>Backend:</span><ul><li>Language: JavaScript</li><li>Runtime Environment: Node.js</li></ul></div><div class='tech-category'><span>Database:</span><ul><li>MySQL</li></ul></div></div></body></html>features:<ul><li>Automated seller-buyer matching</li><li>Secure authentication and role-based access</li><li>Responsive UI for seamless user experience</li></ul>",
    githubLink: "https://github.com/afthegreat/Broker",
    additionalText: "Details",
    image: A, // Add image path for this project
  },
  {
    title: "Online Election System",
    description: "Building a secure and fast election system.",
    details:
    "Description: A web based system that allows students to coose thier student unions in easy and secured way.<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>Technologies Used</title><style>body {font-family: Arial, sans-serif;} .technologies {margin-top: 20px;} .technologies h2 {text-decoration: underline;} .tech-category {margin-bottom: 15px;} .tech-category span {font-weight: bold;} ul {list-style-type: none; padding: 0;}</style></head><body><div class='technologies'><h2>Technologies Used</h2><div class='tech-category'><span>Front-end:</span><ul><li>Language: JavaScript</li><li>Library: React</li></ul></div><div class='tech-category'><span>Backend:</span><ul><li>Language: Java</li><li>Framework: Springboot</li></ul></div><div class='tech-category'><span>Database:</span><ul><li>Postgres</li></ul></div></div></body></html>features:<ul><li>Secure online voting system</li><li>Role-based access for students, candidates, and administrators</li><li>Automated vote counting and results display</li></ul>",
    githubLink: "https://github.com/afthegreat/online-election",
    additionalText: "Details",
    image: "election-image.jpg", // Add image path for this project
  },
  {
    title: "Assignment Submission App",
    description: "Developing a flexible learning mechanism.",
    details:
      "An online platform that allows students to submit assignments, receive feedback, and track deadlines. Features include automated plagiarism detection, deadline reminders, and grade tracking.<h3>it is ongoing project",
    githubLink: "https://github.com/afthegreat/assignment_submission",
    additionalText: "Details",
    image: "assignment-image.jpg", // Add image path for this project
  },
];

// Animation variants for cards and images
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.8 + index * 1 },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 1.3, // Add 0.5 seconds delay (0.8 seconds from paragraph animation and an additional 0.5 seconds delay)
    },
  },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleDetailsClick = (project) => {
    setSelectedProject(selectedProject === project ? null : project);
  };

  return (
    <div id="Projects" className="projects-container">
      <motion.h2
        className="projects-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        My Projects
      </motion.h2>

      <motion.p
        className="projects-description"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }} // Delay for paragraph animation
        viewport={{ once: false }}
      >
        Explore some of my recent works showcasing my expertise in design and
        development.
      </motion.p>

      {/* Image box for all projects with motion */}
      <div className="projects-images">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-image-box"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="project-image"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
            />
          </motion.div>
        ))}
      </div>

      {/* Cards for projects */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: false }}
          >
            <h3 className="project-title">{project.title}</h3>
            <p className="project-text">{project.description}</p>

            <div className="project-buttons">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-button">GitHub</button>
              </a>
              <button
                className="project-button details-button"
                onClick={() => handleDetailsClick(project)}
              >
                {selectedProject === project ? "Close" : "Details"}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pop-up Modal */}
      {selectedProject && (
        <div className="popup-overlay" onClick={() => setSelectedProject(null)}>
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close-btn" onClick={() => setSelectedProject(null)}>
              ×
            </span>
            <h3>{selectedProject.title}</h3>
            {/* Use dangerouslySetInnerHTML to inject HTML content */}
            <p
              dangerouslySetInnerHTML={{
                __html: selectedProject.details,
              }}
            ></p>
          </div>
        </div>
      )}
    </div>
  );
}
