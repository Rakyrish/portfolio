"use client";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        backgroundColor: "#0a0a0a",
        color: "white",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Animated Background Video */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          filter: "brightness(0.4) contrast(1.2)",
        }}
        animate={{ scale: [1, 1.03, 1], x: [0, 10, 0], y: [0, 5, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <source src="/v.mp4" type="video/mp4" />
      </motion.video>

      {/* Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%)",
          zIndex: 1,
        }}
      />

      {/* Hero Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "2rem",
        }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.25 },
            },
          }}
          style={{
            maxWidth: "900px",
            textAlign: "center",
          }}
        >
          {/* Name */}
          <motion.h1
            variants={fadeInUp}
            style={{
              fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
              fontWeight: 800,
              letterSpacing: "-1px",
              background:
                "linear-gradient(90deg, #00d4ff 0%, #0077ff 50%, #00e0ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "1rem",
            }}
          >
            Hi, I’m <span style={{ color: "#00d4ff" }}>John Mbugua</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={fadeInUp}
            style={{
              fontSize: "clamp(1.2rem, 4vw, 2rem)",
              fontWeight: 400,
              color: "#e0e0e0",
              marginBottom: "1.5rem",
            }}
          >
            Full-Stack Developer & Creative Technologist
          </motion.h2>

          {/* Short Bio */}
          <motion.p
            variants={fadeInUp}
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.7,
              color: "#cccccc",
              maxWidth: "700px",
              margin: "0 auto 2rem",
            }}
          >
            I design and build seamless digital experiences using modern web
            technologies. I love turning complex ideas into simple, elegant,
            and impactful products.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeInUp}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <button
              style={{
                padding: "14px 36px",
                borderRadius: "30px",
                border: "none",
                fontSize: "1rem",
                fontWeight: 600,
                background:
                  "linear-gradient(90deg, #00d4ff 0%, #0077ff 100%)",
                color: "#fff",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(0,212,255,0.6)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "none")
              }
              onClick={() => navigate("/projects")}
            >
              View Projects
            </button>

            <button
              style={{
                padding: "14px 36px",
                borderRadius: "30px",
                border: "2px solid #00d4ff",
                background: "transparent",
                fontSize: "1rem",
                fontWeight: 600,
                color: "#fff",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#00d4ff";
                e.currentTarget.style.color = "#0a0a0a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#fff";
              }}
              onClick={() => navigate("/contact")}
            >
              Contact Me
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={fadeInUp}
            style={{
              marginTop: "4rem",
              opacity: 0.8,
              fontSize: "0.9rem",
            }}
            animate={{
              y: [0, 10, 0],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↓ Scroll to explore
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
