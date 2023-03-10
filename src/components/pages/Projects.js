import React from "react";
import ProjectCard from "../project/ProjectCard";
import { projects } from "../helpers/projectsCardList";

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1"> Projects</h1>

        <ul className="projects">
          {projects.map((project, i) => {
            return (
              <ProjectCard
                title={project.title}
                img={project.img}
                id={i}
                key={i}
              />
            );
          })}
        </ul>
        <a
          className="project__link"
          href="https://github.com/HHussHH?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          Смотреть больше работ...
        </a>
      </div>
    </main>
  );
};

export default Projects;
