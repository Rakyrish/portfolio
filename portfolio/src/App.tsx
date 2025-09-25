import Menu from "./menu";
import Home from "./home";
import { Route, Routes } from "react-router-dom";
import Education from "./education";
import Experiences from "./experiences";
import Skills from "./Skills";
import Projects from "./projects";
import Contact from "./contact";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* 🔹 Header */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          background: "linear-gradient(90deg, #77a6bb 0%, #2c4b60 100%)",
          height: "70px",
          borderRadius: "0 16px 0 0",
          boxShadow: "0 2px 8px rgba(44,75,96,0.12)",
          padding: "0 20px",
          position: "fixed",
          zIndex: 1000,
          top: 0,
          left: 0,
        }}
      >
        {/* Profile + Name */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img
            src="./profile.png"
            alt="Profile"
            style={{
              width: "55px",
              height: "55px",
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
                fontSize: isMobile ? "1rem" : "1.4rem",
                fontWeight: 700,
              }}
            >
              MBUGUA JOHN
            </h1>
            <span
              style={{
                color: "#e0f7fa",
                fontSize: "0.9rem",
              }}
            >
              Software Engineer
            </span>
          </div>
        </div>

        {/* Welcome text */}
        {!isMobile && (
          <div style={{marginRight: 29}} >
            <h2
              style={{
                margin: 0,
                color: "#fff",
                fontSize: "1.1rem",
                fontWeight: 500,
              }}
            >
              Welcome!
            </h2>
            <span style={{ color: "#e0f7fa", fontSize: "0.85rem" }}>
              Explore my work below
            </span>
          </div>
        )}
      </header>

      {/* 🔹 Sidebar for Desktop */}
      {!isMobile && (
        <aside
          style={{
            width: "280px",
            minHeight: "100vh",
            background: "#ffffff",
            boxShadow: "2px 0 8px rgba(0,0,0,0.08)",
            padding: "32px 16px",
            borderRadius: "0 16px 16px 0",
            position: "fixed",
            top: "70px", // below header
            left: 0,
          }}
        >
          <Menu />
        </aside>
      )}

      {/* 🔹 Mobile Menu (Overlay Drawer) */}
      {isMobile && menuOpen && (
        <aside
          style={{
            width: "240px",
            height: "100vh",
            background: "#5b91b5",
            padding: "20px",
            position: "fixed",
            top: 75,
            left: 0,
            zIndex: 1100,
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              marginBottom: "20px",
              color: "#fff",
              fontSize: "1.2rem",
            }}
          >
            ✖ Close
          </button>
          <Menu />
        </aside>
      )}

      {/* 🔹 Content Area */}
      <main
        style={{
          marginTop: "80px", // space for header
          marginLeft: isMobile ? "0" : "300px", // space for sidebar
          padding: "32px 16px",
          minHeight: "calc(100vh - 80px)",
          background: isMobile
            ? "linear-gradient(45deg, #b1b7ba 0%, #2c4b60 100%)"
            : "#ffffff",
          transition: "margin-left 0.3s ease",
        }}
      >
        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(true)}
            style={{
              background: "#2c3e95",
              color: "#fff",
              border: "none",
              padding: "10px 16px",
              borderRadius: "6px",
              cursor: "pointer",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
            Menu
          </button>
        )}

        {/* Routes */}
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
