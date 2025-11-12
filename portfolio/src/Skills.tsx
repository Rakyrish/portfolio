"use client";
import { motion, easeOut } from "framer-motion";

function Skills() {
  // Container animation for staggered child entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Each card (Core & Languages) animation
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
  };

  // Each skill item animation
  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  const coreSkills = [
    "Graphic Design",
    "Frontend Development",
    "Backend Development",
    "Fullstack Development",
    "Docker Tool",
    "ESP32",
  ];

  const techSkills = [
    "Python",
    "React",
    "Vite",
    "Next.js",
    "React Native",
    "Django",
    "Node.js",
  ];

  return (
    <div
      style={{
        flex: 1,
        padding: "40px",
        background: "linear-gradient(135deg, #173a53 60%, #2563eb 100%)",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Animated heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: "2.5rem",
          color: "#ffffff",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        Skills
      </motion.h1>

      {/* Container for sections */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Core Skills Section */}
        <motion.div
          variants={sectionVariants}
          style={{
            background: "#ffffff",
            borderRadius: "12px",
            padding: "24px",
            marginBottom: "20px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              fontSize: "1.8rem",
              color: "#34495e",
              marginBottom: "16px",
            }}
          >
            Core Skills
          </h2>

          <motion.ul
            variants={containerVariants}
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "12px",
            }}
          >
            {coreSkills.map((skill) => (
              <motion.li
                key={skill}
                variants={skillVariants}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 15px rgba(52, 152, 219, 0.6)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{
                  background: "#ecf6fd",
                  padding: "10px 16px",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  color: "#2c3e50",
                  textAlign: "center",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Languages & Frameworks Section */}
        <motion.div
          variants={sectionVariants}
          style={{
            background: "#ffffff",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              fontSize: "1.8rem",
              color: "#34495e",
              marginBottom: "16px",
            }}
          >
            Languages & Frameworks
          </h2>

          <motion.ul
            variants={containerVariants}
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "12px",
            }}
          >
            {techSkills.map((tech) => (
              <motion.li
                key={tech}
                variants={skillVariants}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 15px rgba(255, 159, 67, 0.6)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{
                  background: "#fdf2ec",
                  padding: "10px 16px",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  color: "#2c3e50",
                  textAlign: "center",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                {tech}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Skills;
