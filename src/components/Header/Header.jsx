import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./Header.css";
import Avatar from "../../img/avatar-png.png";

const NAV_ITEMS = [
  { label: "Proyectos", path: "/projects" },
  { label: "Sobre mí", path: "/about" },
  { label: "Experiencia", path: "/experience" },
  { label: "Contacto", path: "/contact" },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Cierra el menú al cambiar de página
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Cierra el menú con la tecla Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const goTo = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <header className={`header ${isOpen ? "is-open" : ""}`}>
      <nav className="header-nav" aria-label="Principal">
        <button
          type="button"
          className="header-logo"
          onClick={() => goTo("/")}
          aria-label="Ir al inicio"
        >
          <img src={Avatar} alt="" />
        </button>

        <ul className="header-links" id="main-menu">
          {NAV_ITEMS.map((item, index) => (
            <li key={item.path} style={{ "--i": index }}>
              <button
                type="button"
                className={location.pathname === item.path ? "active" : ""}
                aria-current={location.pathname === item.path ? "page" : undefined}
                onClick={() => goTo(item.path)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="header-toggle"
          aria-expanded={isOpen}
          aria-controls="main-menu"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        className="header-backdrop"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
    </header>
  );
};

export default Header;
