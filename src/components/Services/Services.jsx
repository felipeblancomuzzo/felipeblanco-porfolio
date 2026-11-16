import { useNavigate } from 'react-router-dom';
import { AppWindow, MessageCircle, Wrench } from 'lucide-react';
import Button from "../Button/Button";
import "./Services.css";

const SERVICES = [
  {
    icon: AppWindow,
    title: "Apps a medida",
    text: "Sitios y aplicaciones web hechas a medida de tu negocio, sin plantillas genéricas.",
  },
  {
    icon: MessageCircle,
    title: "Pedidos por WhatsApp",
    text: "Convertí tu WhatsApp en un canal de venta ordenado, con catálogo, carrito y despacho automático.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento y soporte",
    text: "Cambios, mejoras y acompañamiento después de la entrega, sin dejarte solo con el sitio.",
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="services">
      <div className="services-heading">
        <span className="section-kicker">Servicios</span>
        <h2>¿Qué puedo hacer por tu negocio?</h2>
        <p>
          Ayudo a comercios y emprendimientos a tener presencia digital real:
          desde una landing simple hasta un sistema de pedidos completo.
        </p>
      </div>

      <div className="services-grid">
        {SERVICES.map(({ icon: Icon, title, text }, index) => (
          <article className="service-card" key={title}>
            <div className="service-card-top">
              <span className="service-icon" aria-hidden="true">
                <Icon size={30} strokeWidth={2.25} />
              </span>
              <span className="service-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>

      <div className="services-cta">
        <Button onClick={() => navigate('/contact')} text="Contame tu idea" />
      </div>
    </section>
  );
};

export default Services;
