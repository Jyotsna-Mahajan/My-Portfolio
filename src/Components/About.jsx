import "./About.css";

export default function About({ darkMode }) {
  return (
    <section className={`about ${darkMode ? "dark" : "light"}`}>
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi, I’m an MCA postgraduate and a curious learner who loves exploring new tools and technologies.
I believe in learning by doing, and this portfolio is a collection of projects and experiences that represent my journey in tech so far.
          </p>
        </div>

        <div className="about-image">
          <img src="/JyotsnaMahajan.jpeg" alt="Jyotsna Mahajan" />
        </div>
      </div>


    </section>
  );
}
