import React from "react";
import { PROJECTS} from "../cvData";
type Project = {
    name: string;
    description: string;
    tech: string[];
    link?: string | undefined;
    demoLink?: string | undefined;
}

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section__title">Projects</h2>
      <p className="section__subtitle">
        A selection of things I&apos;ve built or contributed to.
      </p>

      <div className="cards">
        {PROJECTS.map((project: Project) => (
          <article key={project.name} className="card">
            <h3 className="card__title">{project.name}</h3>
            <p className="card__description">{project.description}</p>
            <div className="tag-row">
              {project.tech.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
            <div className="card__links">
              {project.link && (
                <a
                  href={project.link}
                  className="card__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  View project ↗
                </a>
              )}
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  className="card__link card__link--demo"
                  target="_blank"
                  rel="noreferrer"
                >
                  YouTube Demo ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
