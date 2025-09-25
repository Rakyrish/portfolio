function Skills() {
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
          marginBottom: "30px",
        }}
      >
        Skills
      </h1>

      {/* Core Skills */}
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
            fontSize: "1.8rem",
            color: "#34495e",
            marginBottom: "16px",
          }}
        >
          Core Skills
        </h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "12px",
          }}
        >
          {["Graphic Design", "Frontend Development", "Backend Development", "Fullstack Development", "Docker Tool"].map(
            (skill) => (
              <li
                key={skill}
                style={{
                  background: "#ecf6fd",
                  padding: "10px 16px",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  color: "#2c3e50",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {skill}
              </li>
            )
          )}
        </ul>
      </div>

      {/* Languages & Frameworks */}
      <div
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
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "12px",
          }}
        >
          {["Python", "React", "Vite", "Next.js", "React Native", "Django", "Node.js"].map(
            (tech) => (
              <li
                key={tech}
                style={{
                  background: "#fdf2ec",
                  padding: "10px 16px",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  color: "#2c3e50",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {tech}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
