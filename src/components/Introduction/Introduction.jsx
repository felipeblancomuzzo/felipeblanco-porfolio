import { useNavigate } from 'react-router-dom';
import Working from "../../img/working-png.png";
import Button from "../Button/Button";
import "./Introduction.css";

const Introduction = () => {
  const navigate = useNavigate();

  return (
    <section className='introduction'>
      <div className='intro-text'>
        <h1>Hola. <br /> Yo soy Felipe.</h1>
        <p>
          Creo apps de pedidos y sistemas de gestión para comercios.
        </p>
        <span className='intro-subtitle'>
          Desarrollador web freelance · Estudiante de Ingeniería de Software en Jala University
        </span>
        <div className='intro-buttons'>
          <Button onClick={() => navigate('/projects')} text="Ver proyectos" />
          <Button onClick={() => navigate('/contact')} text="Hablemos" className="button-secondary" />
        </div>
      </div>
      <div className='intro-visual'>
        <img src={Working} alt="Ilustración de Felipe trabajando" />
      </div>
    </section>
  );
};

export default Introduction;
