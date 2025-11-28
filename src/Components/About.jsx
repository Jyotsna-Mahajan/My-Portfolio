import "./About.css";

export default function About({ darkMode }) {
  return (
    <section className={`about ${darkMode ? "dark" : "light"}`}>
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm Jyotsna Mahajan, MCA graduate and a passionate web developer. I
            enjoy building interactive and responsive websites using HTML, CSS,
            JavaScript, and React. Currently, I'm learning React — this
            portfolio is part of that journey. My goal is to become a strong web
            developer and keep growing every day.
          </p>
        </div>

        <div className="about-image">
          <img src="/JyotsnaMahajan.jpeg" alt="Jyotsna Mahajan" />
        </div>
      </div>


    </section>
  );
}
