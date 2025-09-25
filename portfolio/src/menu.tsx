import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const menuItems = [
  { label: "Home", path: "/home" },
  { label: "Education Background", path: "/education" },
  { label: "Experiences", path: "/experiences" },
  { label: "Skills", path: "/Skills" },
  { label: "Projects", path: "/projects" },
  { label: "Contact Me", path: "/contact" },
];

function Menu() {
  const location = useLocation();
  const [active, setActive] = useState<string | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      style={{
        position: "fixed",        
        // top: 0,                  
        // left: 0,                  
        height: "100vh",          
        width: isMobile ?"280px" : "250px",           
        background: "#5b91b5ff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "24px",
        gap: "16px",
        boxShadow: "2px 0 8px rgba(0,0,0,0.1)", 
       
      }}
    >
      {menuItems.map((item) => (
        <Link
          key={item.label}
          to={item.path}
          style={{ textDecoration: "none" }}
          onClick={() => setActive(item.label)}
        >
          <h1
            style={{
              whiteSpace: "nowrap",
              flexWrap: "nowrap",
              cursor: "pointer",
              fontSize: "1.5rem",
              margin: 0,
              padding: "8px 12px",
              borderRadius: "8px",
              background:
                active === item.label || location.pathname === item.path
                  ? "#3d45b1ff"
                  : "transparent",
              color:
                active === item.label || location.pathname === item.path
                  ? "#fff"
                  : "rgba(8, 8, 8, 1)",
              transition: "background 0.2s, color 0.2s",
              border:
                active === item.label || location.pathname === item.path
                  ? "2px solid #3ac3e2ff"
                  : "0.5px solid #fff",
            }}
          >
            {item.label}
          </h1>
        </Link>
      ))}
      <div >
        <a
          href="/kariuki's.pdf"
          download
          style={{
        display: "inline-flex",
        alignItems: "center",
        background: "#27ae60",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        padding: "12px 20px",
        fontSize: "1rem",
        fontWeight: 600,
        cursor: "pointer",
        textDecoration: "none",
        gap: "8px",
        boxShadow: "0 2px 8px rgba(39,174,96,0.15)",
        transition: "background 0.2s",
          }}
        >
          <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
        style={{ marginRight: "6px" }}
          >
        <path
          fill="currentColor"
          d="M12 16a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v10a1 1 0 0 1-1 1zm-4.707-3.707a1 1 0 0 1 1.414 0L11 14.586V5a1 1 0 1 1 2 0v9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
        />
        <rect
          width="18"
          height="2"
          x="3"
          y="19"
          fill="currentColor"
          rx="1"
        />
          </svg>
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Menu;
