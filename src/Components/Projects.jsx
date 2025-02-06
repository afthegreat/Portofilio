import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "Broker website system",
    description: "User friend buyer and sellor agent.",
    githubLink: "https://github.com/yourusername/broker-website", // Add your GitHub repo link
    additionalLink: "https://example.com", // Second button link (e.g., Live Demo)
    additionalText: "Details" // Text for second button
  },
  {
    title: "Online election System",
    description: "Building Secure and fast Election system.",
    githubLink: "https://github.com/yourusername/broker-website", // Add your GitHub repo link
    additionalLink: "https://example.com", // Second button link (e.g., Live Demo)
    additionalText: "Details" 
  },
  {
    title: "Assignment Submission App",
    description: "Developing flexible Learning mechanism",
    githubLink: "https://github.com/yourusername/broker-website", // Add your GitHub repo link
    additionalLink: "https://example.com", // Second button link (e.g., Live Demo)
    additionalText: "Details" 
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.8 + index * 1 }, //🔥 First card starts at 0.8s, then 1s delay for each next
  }),
};

export default function Projects() {
  return (
    <div className="projects-container">
      {/* Title Animation */}
      <motion.h2
        className="projects-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        My Projects
      </motion.h2>

      {/* Description Animation */}
      <motion.p
        className="projects-description"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: false }}
      >
        Explore some of my recent works showcasing my expertise in design and development.
      </motion.p>

      {/* Cards with Delayed Animations */}
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
          <div className="project-icon">{project.image}</div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-text">{project.description}</p>
        
          <div className="project-buttons">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <button className="project-button">GitHub</button>
            </a>
            <a href={project.additionalLink} target="_blank" rel="noopener noreferrer">
              <button className="project-button">{project.additionalText}</button>
            </a>
          </div>
        </motion.div>
        ))}
      </div>
    </div>
  );
}
