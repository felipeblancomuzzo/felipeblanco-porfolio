import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lightbulb, ShoppingCart, CodeXml } from 'lucide-react';
import WorkingLoop from "../../img/working-loop.mp4";
import WorkingPoster from "../../img/working-loop-poster.jpg";
import Button from "../Button/Button";
import "./Introduction.css";

const Introduction = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  // Si la persona pidió "reducir movimiento", el video queda quieto en el primer cuadro.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    video.play().catch(() => {}); // si el navegador bloquea el autoplay, queda la imagen fija
  }, []);

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
        Ilustración animada: video en loop (ida y vuelta, así no se nota el corte).
        El video tiene fondo blanco; con mix-blend-mode: multiply el blanco
        toma el color de fondo del sitio y no se ve ningún recuadro.
      */}
      <div className='intro-visual'>
        <div className='intro-figure'>
          <video
            ref={videoRef}
            className='intro-video'
            src={WorkingLoop}
            poster={WorkingPoster}
            loop
            muted
            playsInline
            preload="auto"
            aria-label="Ilustración animada de Felipe trabajando en su notebook"
          />

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
