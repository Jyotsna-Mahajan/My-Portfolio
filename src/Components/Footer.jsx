import "./Footer.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer({ darkMode }) {
  return (
    <footer className={`footer-section ${darkMode ? "dark" : "light"}`}>
      <div className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} Jyotsna Mahajan. All Rights Reserved.
        </p>

        <div className="footer-icons">
          <a href="mailto:jyotsnamahajan30@gmail.com" className="footer-icon">
            <EmailIcon />
          </a>

          <a
            href="https://github.com/Jyotsna-Mahajan"
            className="footer-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>

          <a
            href="https://www.linkedin.com/in/jyotsnamahajan/"
            className="footer-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
