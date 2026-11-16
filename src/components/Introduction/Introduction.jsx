import { useNavigate } from 'react-router-dom';
import { ShoppingBag, CodeXml } from 'lucide-react';
import Working from "../../img/working-png.png";
import Button from "../Button/Button";
import "./Introduction.css";

const Introduction = () => {
  const navigate = useNavigate();

  return (
    <section className='introduction'>
      <div className='intro-text'>
        <h1>
          <span className='intro-reveal' style={{ '--d': 0 }}>Hola.</span>
          <span className='intro-reveal' style={{ '--d': 1 }}>Yo soy</span>
          <span className='intro-reveal' style={{ '--d': 2 }}>Felipe.</span>
        </h1>
        <p className='intro-reveal' style={{ '--d': 3 }}>
          Creo apps de pedidos y sistemas de gestión para comercios.
        </p>
        <span className='intro-subtitle intro-reveal' style={{ '--d': 4 }}>
          Desarrollador web freelance · Estudiante de Ingeniería de Software en Jala University
        </span>
        <div className='intro-buttons intro-reveal' style={{ '--d': 5 }}>
          <Button onClick={() => navigate('/projects')} text="Ver proyectos" />
          <Button onClick={() => navigate('/contact')} text="Hablemos" className="button-secondary" />
        </div>
      </div>

      <div className='intro-visual'>
        <div className='intro-blob' aria-hidden="true" />
        <img
          className='intro-illustration'
          src={Working}
          alt="Ilustración de Felipe trabajando en su notebook"
        />
        <span className='intro-chip chip-order' aria-hidden="true">
          <ShoppingBag size={18} strokeWidth={2.5} /> Nuevo pedido
        </span>
        <span className='intro-chip chip-code' aria-hidden="true">
          <CodeXml size={22} strokeWidth={2.5} />
        </span>
      </div>
    </section>
  );
};

export default Introduction;
