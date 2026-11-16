import Reveal from "../../components/Reveal/Reveal";
import data from "../../data/data.json";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience-page">
      <header className="page-header">
        <h1>Experiencia.</h1>
        <p>
          Un recorrido corto por mi formación y mi camino laboral: lo que
          estudio y lo que ya construí para clientes reales.
        </p>
      </header>

      <section className="timeline">
        {data.experience.map((item, index) => (
          <Reveal className="timeline-item" key={item.id} from="left" delay={index * 90}>
            <div className="timeline-marker">
              <span>{item.type}</span>
            </div>
            <div className="timeline-body">
              <div className="timeline-heading">
                <h3>{item.title}</h3>
                <span className="timeline-period">{item.period}</span>
              </div>
              <p className="timeline-place">{item.place}</p>
              <p>{item.description}</p>
            </div>
          </Reveal>
        ))}
      </section>
    </div>
  );
};

export default Experience;
