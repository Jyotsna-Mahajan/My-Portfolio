import "./Contact.css";

import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Contact({ darkMode }) {
  return (
    <div className={`contact-section ${darkMode ? "dark" : "light"}`}>
      <h2 className="contact-heading">Get in Touch</h2>
      <div className="contact-items">
        <a
          href="mailto:jyotsnamahajan30@gmail.com"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <EmailIcon className="contact-icon" />
          jyotsnamahajan30@gmail.com
        </a>
        <a
          href="https://github.com/Jyotsna-Mahajan"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon className="contact-icon" />
          GitHub Profile
        </a>
         <a
          href="https://www.linkedin.com/in/jyotsnamahajan/"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon className="contact-icon" />
          LinkedIn Profile
        </a>
      </div>
    </div>
  );
}
