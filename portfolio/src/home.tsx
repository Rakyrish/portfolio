"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "110vh",
        overflow: "hidden",
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
        }}
        animate={{ scale: [1, 1.05, 1], x: [0, 20, 0], y: [0, 10, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <source src="/v.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      ></div>

      {/* Foreground Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          textAlign: "center",
          color: "white",
          padding: "0 1rem",
        }}
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ fontSize: "3rem", fontWeight: "bold" }}
        >
          I MAKE THINGS
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          style={{ marginTop: "1rem", fontSize: "1.25rem" }}
        >
          A Full-Stack Developer 🚀 | Building ideas into reality
        </motion.p>
      </div>
    </div>
  );
}
