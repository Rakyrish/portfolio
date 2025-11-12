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

type MenuProps = {
  menuOpen?: boolean;
  setMenuOpen: (open: boolean) => void;
};

function Menu({ menuOpen, setMenuOpen }: MenuProps) {
  const location = useLocation();
  const [active, setActive] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      style={{
        position: "fixed",
        height: "100vh",
        width: isMobile ? "280px" : "254px",
        background: "#5b91b5ff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "24px",
        gap: "16px",
        boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
      }}
    >
      {menuItems.map((item) => {
        const isActive = active === item.label || location.pathname === item.path;
        const isHovered = hovered === item.label;

        return (
          <Link
            key={item.label}
            to={item.path}
            style={{ textDecoration: "none" }}
            onClick={() => {
              setActive(item.label);
              if (isMobile) setMenuOpen(!menuOpen);
            }}
            onMouseEnter={() => setHovered(item.label)}
            onMouseLeave={() => setHovered(null)}
          >
            <h1
              style={{
                whiteSpace: "nowrap",
                cursor: "pointer",
                fontSize: "1.5rem",
                margin: 0,
                padding: "12px 14px",
                borderRadius: "8px",
                background: isActive
                  ? "#3d45b1ff"
                  : isHovered
                  ? "#359df2ff"
                  : "transparent",
                color: isActive
                  ? "#fff"
                  : isHovered
                  ? "#ffffff"
                  : "rgba(8, 8, 8, 1)",
                border: isActive
                  ? "2px solid #3ac3e2ff"
                  : "0.5px solid #fff",
                transition: "all 0.25s ease",
                transform: isHovered ? "scale(1.05)" : "scale(1)",
                boxShadow: isHovered
                  ? "0 0 12px rgba(62, 88, 194, 0.4)"
                  : "none",
              }}
            >
              {item.label}
            </h1>
          </Link>
        );
      })}

      {/* Download Button */}
      <div>
        <a
          href="/john_kariuki_resume.pdf"
          download
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#2ecc71";
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 0 12px rgba(46, 204, 113, 0.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#27ae60";
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 2px 8px rgba(39,174,96,0.15)";
          }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
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
            transition: "all 0.25s ease",
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
