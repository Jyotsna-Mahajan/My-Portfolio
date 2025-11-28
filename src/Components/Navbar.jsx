import { useState } from "react";
import "./Navbar.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar({ darkMode, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      
      {/* Hamburger Icon (Mobile) */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <CloseIcon className="icon" />
        ) : (
          <MenuIcon className="icon" />
        )}
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        </li>
        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </li>
        <li>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        </li>
        <li>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        </li>
        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </li>

         {/* ✅ Added Resume Download Link */}
        <li>
          <a 
            href="/public/JyotsnaResume.pdf" 
            download 
            className="resume-btn" 
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </li>
      </ul>

      {/* Theme Toggle */}
      <div className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? (
          <LightModeIcon className="icon" />
        ) : (
          <DarkModeIcon className="icon" />
        )}
      </div>
    </nav>
  );
}
