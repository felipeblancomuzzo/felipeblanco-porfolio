import { useNavigate } from 'react-router-dom';
import { Lightbulb, ShoppingCart, CodeXml } from 'lucide-react';
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
          <span className='intro-reveal' style={{ '--d': 2 }}>
            <mark>Felipe.</mark>
          </span>
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

      {/*
        Ilustración animada: la misma imagen apilada 2 veces.
        La copia de arriba está recortada con una máscara (solo la cabeza)
        y se balancea apenas, como pensando.
      */}
      <div className='intro-visual'>
        <div className='intro-figure'>
          <img
            className='intro-layer'
            src={Working}
            alt="Ilustración de Felipe trabajando en su notebook"
          />
          <img className='intro-layer intro-layer-head' src={Working} alt="" aria-hidden="true" />

          {/* Burbuja de ideas */}
          <span className='intro-dot intro-dot-1' aria-hidden="true" />
          <span className='intro-dot intro-dot-2' aria-hidden="true" />
          <div className='intro-idea' aria-hidden="true">
            <Lightbulb className='intro-idea-icon' style={{ '--n': 0 }} strokeWidth={2.25} />
            <ShoppingCart className='intro-idea-icon' style={{ '--n': 1 }} strokeWidth={2.25} />
            <CodeXml className='intro-idea-icon' style={{ '--n': 2 }} strokeWidth={2.25} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
