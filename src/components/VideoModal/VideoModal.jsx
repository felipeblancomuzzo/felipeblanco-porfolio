import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { X } from "lucide-react";
import "./VideoModal.css";

const VideoModal = ({ open, onClose, src, poster, title }) => {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const previous = document.activeElement;
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      previous?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="video-modal" role="dialog" aria-modal="true" aria-label={title} onClick={onClose}>
      <div className="video-modal-box" onClick={(e) => e.stopPropagation()}>
        <button ref={closeRef} className="video-modal-close" onClick={onClose} aria-label="Cerrar video">
          <X size={22} strokeWidth={2.5} aria-hidden="true" />
        </button>
        <video src={src} poster={poster} controls autoPlay muted playsInline />
      </div>
    </div>,
    document.body
  );
};

VideoModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default VideoModal;
