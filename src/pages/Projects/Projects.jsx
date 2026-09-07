import ProjectCard from "../../components/ProjectCard/ProjectCard";
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
        {data.projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
