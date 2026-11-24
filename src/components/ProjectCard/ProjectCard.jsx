import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { ArrowUpRight, CodeXml, Play } from "lucide-react";
import VideoModal from "../VideoModal/VideoModal";
import "./ProjectCard.css";

const ProjectCard = ({ title, description, tags, demoUrl, repoUrl, featured, image, label, demoNote, videoUrl, videoPoster }) => {
  const [videoOpen, setVideoOpen] = useState(false);
  const closeVideo = useCallback(() => setVideoOpen(false), []);

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

        {demoUrl && demoNote && <p className="project-note">{demoNote}</p>}

        <div className="project-links">
          {demoUrl ? (
            <a className="project-visit" href={demoUrl} target="_blank" rel="noreferrer">
              Visitar el sitio
              <ArrowUpRight size={20} strokeWidth={2.5} aria-hidden="true" />
            </a>
          ) : (
            <span className="project-link-disabled">Próximamente online</span>
          )}
          {videoUrl && (
            <button type="button" className="project-demo" onClick={() => setVideoOpen(true)}>
              <Play size={18} strokeWidth={2.5} aria-hidden="true" />
              Ver demo
            </button>
          )}
          {repoUrl && (
            <a className="project-repo" href={repoUrl} target="_blank" rel="noreferrer">
              <CodeXml size={18} strokeWidth={2.5} aria-hidden="true" />
              Código
            </a>
          )}
        </div>
      </div>

      {videoUrl && (
        <VideoModal
          open={videoOpen}
          onClose={closeVideo}
          src={videoUrl}
          poster={videoPoster}
          title={`Demo de ${title}`}
        />
      )}
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
  demoNote: PropTypes.string,
  videoUrl: PropTypes.string,
  videoPoster: PropTypes.string,
};

export default ProjectCard;
