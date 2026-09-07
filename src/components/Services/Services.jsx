import { useNavigate } from 'react-router-dom';
import Button from "../Button/Button";
import "./Services.css";

const SERVICES = [
  {
    title: "Apps a medida",
    text: "Sitios y aplicaciones web hechas a medida de tu negocio, sin plantillas genéricas.",
  },
  {
    title: "Pedidos por WhatsApp",
    text: "Convertí tu WhatsApp en un canal de venta ordenado, con catálogo, carrito y despacho automático.",
  },
  {
    title: "Mantenimiento y soporte",
    text: "Cambios, mejoras y acompañamiento después de la entrega, sin dejarte solo con el sitio.",
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="services">
      <div className="services-heading">
        <h2>¿Qué puedo hacer por tu negocio?</h2>
        <p>
          Ayudo a comercios y emprendimientos a tener presencia digital real:
          desde una landing simple hasta un sistema de pedidos completo.
        </p>
      </div>

      <div className="services-grid">
        {SERVICES.map((service) => (
          <div className="service-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </div>
        ))}
      </div>

      <div className="services-cta">
        <Button onClick={() => navigate('/contact')} text="Contame tu idea" />
      </div>
    </section>
  );
};

export default Services;
