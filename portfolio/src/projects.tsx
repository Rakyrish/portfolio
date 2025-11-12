"use client";
import { motion, easeInOut } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Virtual Wardrobe",
      description:
        "An outfit picker app that lets users manage their wardrobe, generate random outfits, and integrate with weather-based suggestions.",
      link: "#",
    },
    {
      title: "Heavens-Gate Website",
      description:
        "A responsive web platform built to showcase services and content with a modern UI/UX.",
      link: "#",
    },
    {
      title: "Transget Website",
      description:
        "A logistics and transport service platform. Visit the live site for full functionality.",
      link: "http://transget.co.ke/",
    },
    {
      title: "Task Manager Website",
      description:
        "A web application for creating, updating, and managing tasks efficiently.",
      link: "#",
    },
    {
      title: "Transget Mobile (React Native)",
      description:
        "A mobile application built with React Native for logistics management and service requests.",
      link: "#",
    },
    {
      title: "CRUD Handling in Python",
      description:
        "A project demonstrating Create, Read, Update, and Delete operations using Python with clean modular design.",
      link: "#",
    },
  ];

  // Parent (container) animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.3,
      },
    },
  };

  // Card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeInOut } },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      style={{
        flex: 1,
        padding: "60px 40px",
        background: "linear-gradient(135deg, #173a53 60%, #2563eb 100%)",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Heading animation (left to right) */}
      <motion.h1
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{
          fontSize: "2.8rem",
          color: "#ffffff",
          marginBottom: "10px",
          textAlign: "center",
          letterSpacing: "1px",
        }}
      >
        Projects
      </motion.h1>

      {/* Subtitle animation (right to left) */}
      <motion.p
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{
          color: "#cbd5e1",
          fontSize: "1.15rem",
          textAlign: "center",
          marginBottom: "40px",
          maxWidth: "700px",
          margin: "0 auto 40px auto",
        }}
      >
        A showcase of my latest projects — blending creativity, performance, and clean design.
      </motion.p>

      {/* Project Cards container with stagger animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "24px",
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
            }}
            style={{
              background: "#ffffff",
              borderRadius: "14px",
              padding: "26px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "all 0.3s ease",
            }}
          >
            <motion.h2
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                margin: "0 0 10px 0",
                fontSize: "1.5rem",
                color: "#34495e",
              }}
            >
              {project.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{
                fontSize: "1rem",
                color: "#7f8c8d",
                marginBottom: "16px",
              }}
            >
              {project.description}
            </motion.p>

            {project.link && project.link !== "#" && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  background: "#3498db",
                  padding: "10px 16px",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  alignSelf: "flex-start",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
                }}
              >
                View Project
              </motion.a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Projects;
