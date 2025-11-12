"use client";
import { motion, easeOut } from "framer-motion";

function Experiences() {
  // Container animation controls staggered entry
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

  // Each card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
  };

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
          fontWeight: "700",
          letterSpacing: "1px",
        }}
      >
        Experiences
      </motion.h1>

      {/* Animated container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* DEP TECH Experience */}
        <motion.div
          variants={cardVariants}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 10px 25px rgba(40,135,230,0.4)",
          }}
          transition={{ type: "spring", stiffness: 200 }}
          style={{
            background: "#ffffff",
            borderRadius: "12px",
            padding: "24px",
            marginBottom: "20px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            cursor: "pointer",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "1.8rem",
              color: "#2887e6ff",
            }}
          >
            Full Stack Developer – DEP TECH
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "#428a8fff",
              margin: "8px 0 16px",
            }}
          >
            2024 – Present
          </p>
          <ul style={{ paddingLeft: "20px", margin: 0, color: "#2c3e50" }}>
            <li>
              Built websites using React, Next.js, TypeScript, Vite, Django, and Python
            </li>
            <li>Developed APIs with Node.js</li>
          </ul>
        </motion.div>

        {/* Coming Soon Section */}
        <motion.div
          variants={cardVariants}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 0 20px rgba(189,195,199,0.3)",
          }}
          transition={{ type: "spring", stiffness: 150 }}
          style={{
            background: "#ffffff",
            borderRadius: "12px",
            padding: "24px",
            marginBottom: "20px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
            opacity: 0.7,
            cursor: "default",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "1.8rem",
              color: "#95a5a6",
            }}
          >
            Future Role – Coming Soon
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "#bdc3c7",
              margin: "8px 0 16px",
            }}
          >
            To be updated...
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Experiences;
