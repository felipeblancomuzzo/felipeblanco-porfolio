import Reveal from "../../components/Reveal/Reveal";
import Stack from "../../components/Stack/Stack";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <header className="page-header">
        <h1>Sobre mí.</h1>
        <p>
          Desarrollador web en Coronel Suárez. Hago que los comercios vendan
          y se organicen mejor con apps simples, rápidas y pensadas para el celular.
        </p>
      </header>

      <section className="about-content">
        <Reveal className="about-text" from="left">
          <h2>Quién soy</h2>
          <p>
            Soy Felipe. Me gusta construir cosas que la gente usa todos los
            días: un catálogo donde pedir en dos toques, un panel que ordena
            los clientes de un negocio, una herramienta que ahorra llamadas y
            planillas. Trabajo de cerca con cada comercio, entiendo cómo vende
            hoy y armo la solución a su medida.
          </p>
          <p>
            Estudio Ingeniería de Software en Jala University y, en paralelo,
            trabajo como desarrollador freelance para comercios locales. Mi
            primer cliente fue El Almacén Vinos &amp; Delicatessen, que hoy
            recibe pedidos desde su propia app.
          </p>
        </Reveal>

        <Reveal className="about-image-placeholder" from="right" delay={100}>
          <span>🖼️ Espacio para ilustración: "estudiando / sobre mí"</span>
        </Reveal>
      </section>

      <Stack />
    </div>
  );
};

export default About;
