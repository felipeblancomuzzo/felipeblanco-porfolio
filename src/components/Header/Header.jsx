import { useNavigate } from 'react-router-dom';
import "./Header.css";
import Avatar from "../../img/avatar-png.png"

const Header = () => {

const navigate = useNavigate();

  const goTo = (url) => {
    navigate(url);
  }

  return (
    <header className="header">
        <nav>
          <div onClick={() => goTo("/")}><img src={Avatar} alt="avatar" /></div>
          <div>Proyectos</div>
          <div>Sobre mi</div>
          <div>Experiencia</div>
          <div>Contacto</div>
        </nav>
    </header>
  )
}

export default Header