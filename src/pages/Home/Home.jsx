import { useNavigate } from 'react-router-dom';
import Introduction from "../../components/Introduction/Introduction";
import Services from "../../components/Services/Services";
import Process from "../../components/Process/Process";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Button from "../../components/Button/Button";
import Reveal from "../../components/Reveal/Reveal";
import data from "../../data/data.json";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const featuredProjects = data.projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className='home-container'>
        <Introduction />
        <Services />
        <Process />

        {featuredProjects.length > 0 && (
          <section className="home-featured-project">
            <Reveal from="left">
              <span className="section-kicker">Portfolio</span>
              <h2>Proyectos recientes</h2>
            </Reveal>
            <div className="home-featured-grid">
              {featuredProjects.map((project, index) => (
                <Reveal key={project.id} delay={index * 90}>
                  <ProjectCard {...project} />
                </Reveal>
              ))}
            </div>
            <Reveal delay={150}>
              <Button onClick={() => navigate('/projects')} text="Ver todos los proyectos" />
            </Reveal>
          </section>
        )}
    </div>
  )
}

export default Home
