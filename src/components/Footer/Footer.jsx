import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-cta">
        <h2>¿Tenés un comercio y querés vender más?</h2>
        <button type="button" className="footer-button" onClick={() => navigate('/contact')}>
          Hablemos <ArrowRight size={28} strokeWidth={2.5} aria-hidden="true" />
        </button>
      </div>
      <p className="footer-bottom">
        © {new Date().getFullYear()} Felipe Blanco Muzzolón · Coronel Suárez, Argentina
      </p>
    </footer>
  );
};

export default Footer;
