import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`app${darkMode ? "dark" : "light"}`}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <section id="home">
        <Home darkMode={darkMode} />
      </section>

      <section id="about">
        <About darkMode={darkMode} />
      </section>

      <section id="skills">
        <Skills darkMode={darkMode} />
      </section>

      <section id="projects">
        <Projects darkMode={darkMode} />
      </section>

      <section id="contact">
        <Contact darkMode={darkMode} />
      </section>

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
