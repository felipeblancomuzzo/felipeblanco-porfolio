import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from "../Reveal/Reveal";
import "./Footer.css";

const LINKS = [
  { label: "Inicio", path: "/" },
  { label: "Proyectos", path: "/projects" },
  { label: "Sobre mí", path: "/about" },
  { label: "Experiencia", path: "/experience" },
  { label: "Contacto", path: "/contact" },
];

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // En Contacto no hace falta invitar a ir a Contacto
  const showCta = location.pathname !== "/contact";

  return (
    <footer className="footer">
      {showCta && (
        <Reveal className="footer-cta" key={location.pathname}>
          <h2>¿Tenés un comercio y querés vender más?</h2>
          <button type="button" className="footer-button" onClick={() => navigate('/contact')}>
            Hablemos <ArrowRight size={28} strokeWidth={2.5} aria-hidden="true" />
          </button>
        </Reveal>
      )}

      <nav className="footer-nav" aria-label="Pie de página">
        {LINKS.map((link) => (
          <button type="button" key={link.path} onClick={() => navigate(link.path)}>
            {link.label}
          </button>
        ))}
      </nav>

      <p className="footer-bottom">
        © {new Date().getFullYear()} Felipe Blanco Muzzolón · Coronel Suárez, Argentina
      </p>
    </footer>
  );
};

export default Footer;
