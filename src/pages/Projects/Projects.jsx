import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Reveal from "../../components/Reveal/Reveal";
import data from "../../data/data.json";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-page">
      <header className="page-header">
        <h1>Proyectos.</h1>
        <p>
          Algunos trabajos en los que estuve metido, de principio a fin: desde
          la idea hasta el deploy.
        </p>
      </header>

      <div className="projects-grid">
        {data.projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 90}>
            <ProjectCard {...project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Projects;
