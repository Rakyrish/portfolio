import { useState } from "react";
import emailjs from "emailjs-com";
import {message} from "antd";

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
            alert("Message sent successfully!");
          message.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
            alert("Something went wrong. Please try again.");
          message.error("Something went wrong. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <div
      style={{
        flex: 1,
        padding: "40px",
        background: "linear-gradient(135deg, #cde1efff 60%, #2563eb 100%)",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", color: "#2c3e50", marginBottom: "20px" }}>
        Contact Me
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#34495e", marginBottom: "30px" }}>
        I’m open to new opportunities, collaborations, and freelance projects.  
        Feel free to reach out!
      </p>

      {/* Contact Info */}
      <div style={{ marginBottom: "40px" }}>
        <p>📧 Email: <a href="mailto:mbuguajohn367@gmail.com">mbuguajohn367@gmail.com</a></p>
        <p>📞 Phone: <a href="tel:0746542197">0746542197</a></p>
        <p>💬 WhatsApp: <a href="https://wa.me/254746542197" target="_blank">Chat on WhatsApp</a></p>
        <p>🌐 GitHub: <a href="https://github.com/Rakyrish" target="_blank">github.com/Rakyrish</a></p>
        <p>💼 LinkedIn: <a href="https://www.linkedin.com/in/john-mbugua-98374b354/" target="_blank">John Mbugua</a></p>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#ffffff",
          padding: "24px",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          maxWidth: "600px",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#34495e" }}>Send me a message</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "12px", marginBottom: "16px" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "12px", marginBottom: "16px" }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "12px", marginBottom: "16px", minHeight: "120px" }}
        />
        <button
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
        </button>
      </form>
    </div>
  );
}

export default Contact;
