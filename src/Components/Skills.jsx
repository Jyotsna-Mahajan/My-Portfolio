import "./Skills.css";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiCplusplus } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";

export default function Skills({ darkMode }) {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="skill-icon" /> },
    { name: "CSS", icon: <FaCss3Alt className="skill-icon" /> },
    { name: "JavaScript", icon: <FaJs className="skill-icon" /> },
    { name: "React", icon: <FaReact className="skill-icon" /> },
    { name: "React Router", icon: <SiReactrouter className="skill-icon" /> },

    { name: "Material UI", icon: <SiMui className="skill-icon" /> },
    { name: "C++", icon: <SiCplusplus className="skill-icon" /> },
    { name: "Git & GitHub", icon: <FaGitAlt className="skill-icon" /> },
    { name: "SQL", icon: <DiMysql className="skill-icon" /> },
  ];

  return (
    <section
      className={`skills-section ${darkMode ? "dark" : "light"}`}
      id="skills"
    >
      <h2 className="skills-title">My Skills</h2>
      <p className="skills-subtitle">Technologies and Tools I work with </p>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
