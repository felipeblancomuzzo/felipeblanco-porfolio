import PropTypes from "prop-types";
import "./ProjectCard.css";

const ProjectCard = ({ title, description, tags, demoUrl, repoUrl, featured, image }) => {
  return (
    <div className={`project-card ${featured ? "featured" : ""}`}>
      {image ? (
        <img className="project-image" src={image} alt={`Captura de ${title}`} loading="lazy" />
      ) : (
        <div className="project-image-placeholder">
          <span>🖼️ Espacio para captura del proyecto</span>
        </div>
      )}

      <div className="project-body">
        <h3>{title}</h3>
        <p>{description}</p>

        {tags?.length > 0 && (
          <ul className="project-tags">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}

        <div className="project-links">
          {demoUrl ? (
            <a href={demoUrl} target="_blank" rel="noreferrer">Ver demo</a>
          ) : (
            <span className="project-link-disabled">Demo próximamente</span>
          )}
          {repoUrl ? (
            <a href={repoUrl} target="_blank" rel="noreferrer">Repositorio</a>
          ) : (
            <span className="project-link-disabled">Repo privado</span>
          )}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  demoUrl: PropTypes.string,
  repoUrl: PropTypes.string,
  featured: PropTypes.bool,
  image: PropTypes.string,
};

export default ProjectCard;
