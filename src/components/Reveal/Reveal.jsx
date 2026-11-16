import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "./Reveal.css";

// Hace aparecer su contenido la primera vez que entra en pantalla al scrollear.
// from: desde dónde entra ("bottom", "left" o "right"). delay: retraso en ms (para cascadas).
const Reveal = ({ children, from = "bottom", delay = 0, className = "" }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // se anima una sola vez
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal reveal-${from} ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
};

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  from: PropTypes.oneOf(["bottom", "left", "right"]),
  delay: PropTypes.number,
  className: PropTypes.string,
};

export default Reveal;
