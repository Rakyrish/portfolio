import Menu from "./menu";
import Home from "./home";
import { Route, Routes } from "react-router-dom"; 
import Education from "./education";
import Experiences from "./experiences";
// import Skills from "./skills";
// import Projects from "./projects";
// import Contact from "./contact";

function App() {
  return (
    <>
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "96%",
          background: "linear-gradient(90deg, #77a6bb 0%, #2c4b60 100%)",
          height: "70px",
          borderRadius: "0 16px 0 0",
          boxShadow: "0 2px 8px rgba(44,75,96,0.12)",
          padding: "0 30px",
          position: "fixed",
          zIndex: 1000,
          top: 0,
          
          right: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <img
            src="./profile.png"
            alt="Profile"
            style={{
              width: "55px",
              height: "65px",
              borderRadius: "50%",
              border: "2px solid #fff",
              boxShadow: "0 2px 6px rgba(44,75,96,0.15)",
              objectFit: "cover",
            }}
          />
          <div>
            <h1
              style={{
                margin: 0,
                color: "#fff",
                fontSize: "1.5rem",
                fontWeight: 700,
                letterSpacing: "1px",
              }}
            >
              MBUGUA JOHN
            </h1>
            <span
              style={{
                color: "#e0f7fa",
                fontSize: "0.95rem",
                fontWeight: 400,
                letterSpacing: "0.5px",
              }}
            >
              Software Engineer 
            </span>
          </div>
        </div>
        <div>
          <h2
            style={{
              margin: 0,
              color: "#fff",
              fontSize: "1.1rem",
              fontWeight: 500,
              letterSpacing: "0.5px",
            }}
          >
            Welcome!
          </h2>
          <span
            style={{
              color: "#e0f7fa",
              fontSize: "0.85rem",
            }}
          >
            Explore my work below
          </span>
        </div>
      </header>

      <div
        style={{
          flexDirection: "row",
          display: "flex",
          minHeight: "100vh",
          background: "#ffffff",
          boxShadow: "2px 0 8px rgba(0,0,0,0.08)",
          alignItems: "flex-start",
          padding: "32px 16px",
          borderRadius: "0 16px 16px 0",
          marginTop: "15px",
        }}
      >
        <div
          style={{
            width: "400px",
            minHeight: "100vh",
            background: "#ffffff",
            boxShadow: "2px 0 8px rgba(0,0,0,0.08)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "32px 16px",
            borderRadius: "0 16px 16px 0",
          }}
        >
          <Menu />
        </div>

        {/* ✅ Routes only */}
        <div style={{ flex: 1, padding: "32px" }}>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experiences" element={<Experiences />} />
            {/* <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
