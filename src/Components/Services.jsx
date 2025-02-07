import React from "react";
import { motion } from "framer-motion";
import "./Services.css";

const services = [
  {
    title: "Full Stack Web Development",
    description: "Building scalable, responsive, and modern web applications.",
    icon: "💻",
  },
  {
    title: "UI/UX Designing",
    description: "Creating intuitive, user-friendly, and aesthetically pleasing interfaces.",
    icon: "🎨",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 * index },
  }),
};

export default function Services() {
  return (
    <div id="Services" className="services-container">
      <motion.h2
        className="services-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        My Services
      </motion.h2>

      <motion.p
        className="services-description"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true }}
      >
        Explore the services I offer to help you bring your ideas to life.
      </motion.p>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-text">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
