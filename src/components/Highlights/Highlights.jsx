import { Check } from 'lucide-react';
import "./Highlights.css";

const ITEMS = [
  "Apps de pedidos",
  "Catálogos online",
  "Sistemas de gestión",
  "Dashboards",
];

const Highlights = () => {
  return (
    <ul className="highlights" aria-label="Qué hago">
      {ITEMS.map((item) => (
        <li key={item}>
          <span className="highlights-check" aria-hidden="true">
            <Check size={16} strokeWidth={3} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Highlights;
