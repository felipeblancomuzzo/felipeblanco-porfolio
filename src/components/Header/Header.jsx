import { useNavigate, useLocation } from 'react-router-dom';
import "./Header.css";
import Avatar from "../../img/avatar-png.png"

const NAV_ITEMS = [
  { label: "Proyectos", path: "/projects" },
  { label: "Sobre mi", path: "/about" },
  { label: "Experiencia", path: "/experience" },
  { label: "Contacto", path: "/contact" },
];

const Header = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const goTo = (url) => {
    navigate(url);
  }

  return (
    <header className="header">
        <nav>
          <div className="header-logo" onClick={() => goTo("/")}>
            <img src={Avatar} alt="avatar" />
          </div>
          {NAV_ITEMS.map((item) => (
            <div
              key={item.path}
              className={location.pathname === item.path ? "active" : ""}
              onClick={() => goTo(item.path)}
            >
              {item.label}
            </div>
          ))}
        </nav>
    </header>
  )
}

export default Header