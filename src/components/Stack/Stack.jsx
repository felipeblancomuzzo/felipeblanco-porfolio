import {
  siReact,
  siJavascript,
  siVite,
  siTailwindcss,
  siHtml5,
  siNodedotjs,
  siSupabase,
  siPostgresql,
  siGit,
  siGithub,
  siVercel,
} from "simple-icons";
import { MessageCircle, Smartphone, LayoutDashboard } from "lucide-react";
import Reveal from "../Reveal/Reveal";
import "./Stack.css";

// Logo de marca (simple-icons trae el dibujo como un "path" SVG)
const BrandIcon = ({ icon }) => (
  <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true" fill="currentColor">
    <path d={icon.path} />
  </svg>
);

const GROUPS = [
  {
    title: "Frontend",
    text: "Interfaces rápidas y pensadas para el celular.",
    items: [
      { name: "React", icon: siReact },
      { name: "JavaScript", icon: siJavascript },
      { name: "Vite", icon: siVite },
      { name: "Tailwind CSS", icon: siTailwindcss },
      { name: "HTML y CSS", icon: siHtml5 },
    ],
  },
  {
    title: "Backend y datos",
    text: "Usuarios, pedidos y datos guardados de forma segura.",
    items: [
      { name: "Node.js", icon: siNodedotjs },
      { name: "Supabase", icon: siSupabase },
      { name: "PostgreSQL", icon: siPostgresql },
    ],
  },
  {
    title: "Herramientas",
    text: "Código ordenado y publicado en internet.",
    items: [
      { name: "Git", icon: siGit },
      { name: "GitHub", icon: siGithub },
      { name: "Vercel", icon: siVercel },
    ],
  },
];

const SKILLS = [
  { name: "Mobile first", icon: Smartphone },
  { name: "Pedidos por WhatsApp", icon: MessageCircle },
  { name: "Paneles de gestión", icon: LayoutDashboard },
];

const Stack = () => {
  return (
    <section className="stack">
      <Reveal from="left" className="stack-heading">
        <span className="section-kicker">Stack</span>
        <h2>Con qué trabajo</h2>
        <ul className="stack-skills">
          {SKILLS.map(({ name, icon: Icon }) => (
            <li key={name}>
              <Icon size={18} strokeWidth={2.5} aria-hidden="true" />
              {name}
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="stack-groups">
        {GROUPS.map((group, index) => (
          <Reveal key={group.title} delay={index * 90}>
            <article className="stack-group">
              <h3>{group.title}</h3>
              <p>{group.text}</p>
              <ul className="stack-tools">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <span className="stack-tool-icon">
                      <BrandIcon icon={item.icon} />
                    </span>
                    {item.name}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Stack;
