import { useState } from "react";
import { MessageCircle, Mail, CodeXml, Briefcase, ArrowUpRight } from "lucide-react";
import Button from "../../components/Button/Button";
import Reveal from "../../components/Reveal/Reveal";
import "./Contact.css";

// WhatsApp en formato internacional, sin "+" ni espacios.
// Para celulares de Argentina: 54 + 9 + código de área + número.
const WHATSAPP_NUMBER = "5492926462675";
const CONTACT_EMAIL = "felipeblanco114@gmail.com";
const GITHUB_URL = "https://github.com/felipeblanco114";
const LINKEDIN_URL = "https://www.linkedin.com/in/felipe-blanco-muzzolon/";

const DIRECT_LINKS = [
  { label: "WhatsApp", icon: MessageCircle, href: `https://wa.me/${WHATSAPP_NUMBER}`, external: true },
  { label: "Email", icon: Mail, href: `mailto:${CONTACT_EMAIL}`, external: false },
  { label: "GitHub", icon: CodeXml, href: GITHUB_URL, external: true },
  { label: "LinkedIn", icon: Briefcase, href: LINKEDIN_URL, external: true },
];

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
        <Reveal className="contact-form-wrap" from="left">
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
        </Reveal>

        <Reveal className="contact-direct" from="right" delay={100}>
          <h2>O escribime directo</h2>
          <ul className="contact-links">
            {DIRECT_LINKS.map(({ label, icon: Icon, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                >
                  <span className="contact-link-icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={2.25} />
                  </span>
                  {label}
                  <ArrowUpRight className="contact-link-arrow" size={20} strokeWidth={2.5} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </div>
  );
};

export default Contact;
