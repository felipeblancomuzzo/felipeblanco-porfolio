import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ 
  text, 
  onClick, 
  type = "button", 
  disabled = false,
  className = "",
  icon = null 
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`custom-button ${className}`}
      aria-label={text}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.element,
};

export default Button;