import React from 'react';
import { useNavigate } from 'react-router-dom';
import Introduction from "../../components/Introduction/Introduction";
import Services from "../../components/Services/Services";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Button from "../../components/Button/Button";
import data from "../../data/data.json";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const featuredProject = data.projects.find((p) => p.featured);

  return (
    <main className='home-container'>
        <Introduction />
        <Services />

        {featuredProject && (
          <section className="home-featured-project">
            <h2>Un proyecto reciente</h2>
            <div className="home-featured-project-card">
              <ProjectCard {...featuredProject} />
            </div>
            <Button onClick={() => navigate('/projects')} text="Ver todos los proyectos" />
          </section>
        )}
    </main>
  )
}

export default Home