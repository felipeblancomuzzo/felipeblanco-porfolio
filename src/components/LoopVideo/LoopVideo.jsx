import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./LoopVideo.css";

// Video ilustrado en loop, sin sonido, que se funde con el fondo del sitio.
// Con "reducir movimiento" activado queda quieto en el primer cuadro (poster).
const LoopVideo = ({ src, poster, label, className = "" }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.play().catch(() => {}); // si el navegador bloquea el autoplay, queda la imagen fija
  }, []);

  return (
    <div className={`loop-video ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        loop
        muted
        playsInline
        preload="metadata"
        aria-label={label}
      />
    </div>
  );
};

LoopVideo.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default LoopVideo;
