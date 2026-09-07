import { useState } from "react";
import Button from "../../components/Button/Button";
import "./Contact.css";

// TODO Felipe: reemplazá estos valores con tus datos reales.
// El número de WhatsApp va en formato internacional, sin "+" ni espacios (ej: 549291XXXXXXX).
const WHATSAPP_NUMBER = "5491100000000";
const CONTACT_EMAIL = "tu-email@ejemplo.com";
const GITHUB_URL = "https://github.com/felipeblancomuzzo";
const LINKEDIN_URL = "https://www.linkedin.com/in/tu-usuario";

const Contact = () => {
  const [form, setForm] = useState({ name: "", contact: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text =
      `Hola Felipe! Soy ${form.name || "—"}.\n` +
      `Contacto: ${form.contact || "—"}\n\n` +
      `${form.message}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="contact-page">
      <header className="page-header">
        <h1>Contacto.</h1>
        <p>
          ¿Tenés un proyecto en mente? Contame de qué se trata y te
          respondo por WhatsApp a la brevedad.
        </p>
      </header>

      <section className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="¿Cómo te llamás?"
            required
          />

          <label htmlFor="contact">Email o teléfono</label>
          <input
            id="contact"
            name="contact"
            type="text"
            value={form.contact}
            onChange={handleChange}
            placeholder="Para poder responderte"
            required
          />

          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            placeholder="Contame sobre tu proyecto..."
            required
          />

          <Button type="submit" text="Enviar por WhatsApp" />
        </form>

        <div className="contact-direct">
          <h2>O escribime directo</h2>
          <ul className="contact-links">
            <li>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`}>Email</a>
            </li>
            <li>
              <a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</a>
            </li>
            <li>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Contact;
