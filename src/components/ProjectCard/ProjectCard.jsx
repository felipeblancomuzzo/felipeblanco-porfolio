import PropTypes from "prop-types";
import "./ProjectCard.css";

const ProjectCard = ({ title, description, tags, demoUrl, repoUrl, featured, image, label }) => {
  return (
    <div className={`project-card ${featured ? "featured" : ""}`}>
      {image ? (
        <div className="project-stage">
          {label && <span className="project-label">{label}</span>}
          <div className="project-phone">
            <img src={image} alt={`Captura de ${title} en el celular`} loading="lazy" />
          </div>
        </div>
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
  label: PropTypes.string,
};

export default ProjectCard;
