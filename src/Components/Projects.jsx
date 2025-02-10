import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import onlin from "./Assets/online.png";
import broke from "./Assets/broker.png";

const projects = [
  {
    title: "Broker website system",
    description: "User-friendly buyer and seller agent system.",
    details: `
      <h2>Description</h2>
      <p>A web-based system for connecting sellers with buyers efficiently.</p>
      <h2>Technologies Used</h2>
      <div class="technologies">
        <div class="tech-category"><span>Front-end:</span>
          <ul>
            <li>Language: JavaScript</li>
            <li>Library: React</li>
          </ul>
        </div>
        <div class="tech-category"><span>Backend:</span>
          <ul>
            <li>Language: JavaScript</li>
            <li>Runtime Environment: Node.js</li>
          </ul>
        </div>
        <div class="tech-category"><span>Database:</span>
          <ul>
            <li>MySQL</li>
          </ul>
        </div>
      </div>
      <h3>Features:</h3>
      <ul>
        <li>Automated seller-buyer matching</li>
        <li>Secure authentication and role-based access</li>
        <li>Responsive UI for seamless user experience</li>
      </ul>
    `,
    githubLink: "https://github.com/afthegreat/Broker",
    additionalText: "Details",
    image: broke,
  },
  {
    title: "Online Election System",
    description: "Building a secure and fast election system.",
    details: `
      <h2>Description</h2>
      <p>A web-based system that allows students to choose their student unions in an easy and secured way.</p>
      <h2>Technologies Used</h2>
      <div class="technologies">
        <div class="tech-category"><span>Front-end:</span>
          <ul>
            <li>Language: JavaScript</li>
            <li>Library: React</li>
          </ul>
        </div>
        <div class="tech-category"><span>Backend:</span>
          <ul>
            <li>Language: Java</li>
            <li>Framework: Springboot</li>
          </ul>
        </div>
        <div class="tech-category"><span>Database:</span>
          <ul>
            <li>Postgres</li>
          </ul>
        </div>
      </div>
      <h3>Features:</h3>
      <ul>
        <li>Secure online voting system</li>
        <li>Role-based access for students, candidates, and administrators</li>
        <li>Automated vote counting and results display</li>
      </ul>
    `,
    githubLink: "https://github.com/afthegreat/online-election",
    additionalText: "Details",
    image: onlin,
  },
];

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut", delay: 1.3 },
  },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const handleImageClick = (image) => {
    setModalImage(image);
    setIsModalOpen(true); // Open the modal with the clicked image
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setModalImage(null); // Clear the image
  };

  const handleDetailsClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true); // Open the details modal
  };

  const closeDetailsModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false); // Close the details modal
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
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: false }}
      >
        Explore some of my recent works showcasing my expertise in design and development.
      </motion.p>

      {/* Project Items with Images and Cards in Pairs */}
      <div className="projects-pair-container">
        {projects.map((project, index) => (
          <div key={index} className="project-pair">
            <motion.div
              className="project-image-box"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="project-image clickable"
                onClick={() => handleImageClick(project.image)} // Clickable image
              />
              <div className="image-tooltip">Click to view full image</div>
            </motion.div>

            <motion.div
              className="project-card"
              variants={imageVariants}
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
                  {project.additionalText}
                </button>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Modal for Fullscreen Image */}
      {isModalOpen && modalImage && (
        <div className="popup-overlay" onClick={closeModal}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>
              ×
            </span>
            <img src={modalImage} alt="Fullscreen" className="modal-image" />
          </div>
        </div>
      )}

      {/* Modal for Project Details */}
      {isModalOpen && selectedProject && (
        <div className="popup-overlay" onClick={closeDetailsModal}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeDetailsModal}>
              ×
            </span>
            <h3 className="project-title">{selectedProject.title}</h3>
            {/* Render HTML content for the project */}
            <div
              className="project-details"
              dangerouslySetInnerHTML={{ __html: selectedProject.details }}
            />
            <div className="project-buttons">
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-button">GitHub</button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
