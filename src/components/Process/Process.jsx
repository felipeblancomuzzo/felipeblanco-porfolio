import { MessagesSquare, FileText, Code, Rocket } from "lucide-react";
import Reveal from "../Reveal/Reveal";
import "./Process.css";

const STEPS = [
  {
    icon: MessagesSquare,
    title: "Charlamos",
    text: "Me contás cómo vendés hoy y qué te gustaría mejorar. La primera charla no tiene costo.",
  },
  {
    icon: FileText,
    title: "Propuesta",
    text: "Te paso qué incluye, cuánto cuesta y cuándo está listo. Sin letra chica ni sorpresas.",
  },
  {
    icon: Code,
    title: "Desarrollo",
    text: "Te muestro avances cada semana para que lo pruebes desde tu celular y opines.",
  },
  {
    icon: Rocket,
    title: "Entrega y soporte",
    text: "Lo publico, te enseño a usarlo y sigo disponible para cambios y mejoras.",
  },
];

const Process = () => {
  return (
    <section className="process">
      <Reveal from="left" className="process-heading">
        <span className="section-kicker">Cómo trabajo</span>
        <h2>De la idea a tu app, en 4 pasos</h2>
        <p>Un proceso simple y claro, para que sepas en todo momento en qué estamos.</p>
      </Reveal>

      <ol className="process-steps">
        {STEPS.map(({ icon: Icon, title, text }, index) => (
          <li key={title}>
            <Reveal className="process-step" delay={index * 90}>
              <div className="process-step-top">
                <span className="process-number">{index + 1}</span>
              </div>
              <h3>
                <Icon className="process-icon" size={24} strokeWidth={2.25} aria-hidden="true" />
                {title}
              </h3>
              <p>{text}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Process;
