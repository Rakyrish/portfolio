function Experiences() {
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
      <h1
        style={{
          fontSize: "2.5rem",
          color: "#4579aeff",
          marginBottom: "20px",
          fontWeight: "700",
          letterSpacing: "1px",
        }}
      >
        Experiences
      </h1>

      {/* DEP TECH Experience */}
      <div
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
          <li>Built websites using React, Next.js, TypeScript, Vite, Django, and Python</li>
          <li>Developed APIs with Node.js</li>
        </ul>
      </div>

      
      <div
        style={{
          background: "#ffffff",
          borderRadius: "12px",
          padding: "24px",
          marginBottom: "20px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
          opacity: 0.6,
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
      </div>
    </div>
  );
}

export default Experiences;
