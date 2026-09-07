import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <header className="page-header">
        <h1>Sobre mí.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </header>

      <section className="about-content">
        <div className="about-text">
          <h2>Quién soy</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Actualmente estudio
            Ingeniería de Software en Jala University, y en paralelo trabajo
            como desarrollador freelance para comercios locales.
          </p>
        </div>

        <div className="about-image-placeholder">
          <span>🖼️ Espacio para ilustración: "estudiando / sobre mí"</span>
        </div>
      </section>

      <section className="about-stack">
        <h2>Con qué trabajo</h2>
        <ul className="stack-list">
          <li>React</li>
          <li>JavaScript</li>
          <li>Vite</li>
          <li>Tailwind CSS</li>
          <li>Node.js</li>
          <li>Git</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
