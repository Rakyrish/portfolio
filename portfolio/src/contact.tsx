"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import { message } from "antd";
import { motion, easeOut } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_0va67tc",
        "template_lod2v39",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "ICQfutmdEs45ZC-sN"
      )
      .then(
        () => {
          message.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          message.error("Something went wrong. Please try again.");
          console.error(error.text);
        }
      );
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{
        flex: 1,
        padding: "40px",
        background: "linear-gradient(135deg, #cde1efff 60%, #2563eb 100%)",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <motion.h1
        variants={itemVariants}
        style={{
          fontSize: "2.5rem",
          color: "#2c3e50",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        Contact Me
      </motion.h1>

      <motion.p
        variants={itemVariants}
        style={{
          fontSize: "1.2rem",
          color: "#34495e",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        I’m open to new opportunities, collaborations, and freelance projects.  
        Feel free to reach out!
      </motion.p>

      {/* Contact Info */}
      <motion.div
        variants={itemVariants}
        style={{ marginBottom: "40px", textAlign: "center", lineHeight: "1.8" }}
      >
        <p>📧 Email: <a href="mailto:mbuguajohn367@gmail.com">mbuguajohn367@gmail.com</a></p>
        <p>📞 Phone: <a href="tel:0746542197">0746542197</a></p>
        <p>💬 WhatsApp: <a href="https://wa.me/254746542197" target="_blank">Chat on WhatsApp</a></p>
        <p>🌐 GitHub: <a href="https://github.com/Rakyrish" target="_blank">github.com/Rakyrish</a></p>
        <p>💼 LinkedIn: <a href="https://www.linkedin.com/in/john-mbugua-98374b354/" target="_blank">John Mbugua</a></p>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        variants={itemVariants}
        onSubmit={handleSubmit}
        style={{
          background: "#ffffff",
          padding: "24px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#34495e" }}>Send me a message</h2>
        <motion.input
          whileFocus={{ scale: 1.02, boxShadow: "0 4px 15px rgba(52,152,219,0.4)" }}
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "12px", marginBottom: "16px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <motion.input
          whileFocus={{ scale: 1.02, boxShadow: "0 4px 15px rgba(52,152,219,0.4)" }}
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "12px", marginBottom: "16px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <motion.textarea
          whileFocus={{ scale: 1.02, boxShadow: "0 4px 15px rgba(52,152,219,0.4)" }}
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "12px", marginBottom: "16px", minHeight: "120px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 5px 20px rgba(52,152,219,0.5)" }}
          type="submit"
          disabled={!formData.name || !formData.email || !formData.message}
          style={{
            background: "#3498db",
            color: "#fff",
            border: "none",
            padding: "12px 20px",
            borderRadius: "8px",
            fontSize: "1rem",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.div>
  );
}

export default Contact;
