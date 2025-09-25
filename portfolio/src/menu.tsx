import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { label: "Home", path: "/home" },
  { label: "Education Background", path: "/education" },
  { label: "Experiences", path: "/experiences" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Contact Me", path: "/contact" },
];

function Menu() {
  const location = useLocation();
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      style={{
        position: "fixed",        // ✅ keeps it fixed
        // top: 0,                   // stick to top
        // left: 0,                  // stick to left
        height: "100vh",          // full height
        width: "280px",           // sidebar width
        background: "#5b91b5ff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "24px",
        gap: "16px",
        boxShadow: "2px 0 8px rgba(0,0,0,0.1)", // optional shadow
       
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
                  : "2px solid transparent",
            }}
          >
            {item.label}
          </h1>
        </Link>
      ))}
    </div>
  );
}

export default Menu;
