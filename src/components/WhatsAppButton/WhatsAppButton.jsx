import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../../data/contact";
import "./WhatsAppButton.css";

const MESSAGE = "Hola Felipe! Vi tu portfolio y quería consultarte por un proyecto.";
const SHOW_AFTER = 320; // px scrolleados antes de aparecer

// Botón flotante de WhatsApp (solo en celulares).
// Aparece al bajar un poco, y se esconde en Contacto y cuando se ve el footer,
// porque ahí ya hay un botón para escribir.
const WhatsAppButton = ({ scrollRef }) => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const onScroll = () => setScrolled(container.scrollTop > SHOW_AFTER);
    onScroll();
    container.addEventListener("scroll", onScroll, { passive: true });

    let observer;
    const footer = container.querySelector(".footer");
    if (footer && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        ([entry]) => setFooterVisible(entry.isIntersecting),
        { root: container, threshold: 0.05 }
      );
      observer.observe(footer);
    }

    return () => {
      container.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, [scrollRef, location.pathname]);

  const isVisible = scrolled && !footerVisible && location.pathname !== "/contact";

  return (
    <a
      className={`whatsapp-button ${isVisible ? "is-visible" : ""}`}
      href={whatsappLink(MESSAGE)}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribime por WhatsApp"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
    >
      <MessageCircle size={24} strokeWidth={2.25} aria-hidden="true" />
    </a>
  );
};

WhatsAppButton.propTypes = {
  scrollRef: PropTypes.shape({ current: PropTypes.any }).isRequired,
};

export default WhatsAppButton;
