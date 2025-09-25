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
          color: "#ffffffff",
          marginBottom: "30px",
        }}
      >
        Projects
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {projects.map((project) => (
          <div
            key={project.title}
            style={{
              background: "#ffffff",
              borderRadius: "12px",
              padding: "24px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <h2
              style={{
                margin: "0 0 10px 0",
                fontSize: "1.5rem",
                color: "#34495e",
              }}
            >
              {project.title}
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "#7f8c8d",
                marginBottom: "16px",
              }}
            >
              {project.description}
            </p>
            {project.link && project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  background: "#3498db",
                  padding: "10px 16px",
                  borderRadius: "8px",
                  fontWeight: "bold",
                }}
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
