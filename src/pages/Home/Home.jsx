import { useNavigate } from 'react-router-dom';
import Introduction from "../../components/Introduction/Introduction";
import Services from "../../components/Services/Services";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Button from "../../components/Button/Button";
import Reveal from "../../components/Reveal/Reveal";
import data from "../../data/data.json";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const featuredProject = data.projects.find((p) => p.featured);

  return (
    <div className='home-container'>
        <Introduction />
        <Services />

        {featuredProject && (
          <section className="home-featured-project">
            <Reveal from="left">
              <span className="section-kicker">Portfolio</span>
              <h2>Un proyecto reciente</h2>
            </Reveal>
            <Reveal className="home-featured-project-card" delay={100}>
              <ProjectCard {...featuredProject} />
            </Reveal>
            <Reveal delay={150}>
              <Button onClick={() => navigate('/projects')} text="Ver todos los proyectos" />
            </Reveal>
          </section>
        )}
    </div>
  )
}

export default Home
