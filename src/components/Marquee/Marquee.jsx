import "./Marquee.css";

const ITEMS = [
  "Apps de pedidos",
  "Catálogos online",
  "Sistemas de gestión",
  "Dashboards",
  "Pedidos por WhatsApp",
  "Mobile first",
];

const Marquee = () => {
  return (
    <div className="marquee">
      <p className="sr-only">{ITEMS.join(", ")}</p>
      <div className="marquee-track" aria-hidden="true">
        {/* La lista va duplicada para que el loop no tenga cortes */}
        {[0, 1].map((copy) => (
          <ul className="marquee-list" key={copy}>
            {ITEMS.map((item) => (
              <li key={item}>
                {item}
                <span className="marquee-star">✦</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
