import React, { useState } from "react";
import { EXPERIENCES} from "../cvData";
type Experience = {
    company: string;
    role: string;
    start: string;
    end: string;
    location: string;
    bullets: string[];
    tech: string[];
};


export const ExperienceSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="experience" className="section">
      <h2 className="section__title">Experience</h2>
      <p className="section__subtitle">
        Click on a role to expand details.
      </p>

      <div className="timeline">
        {EXPERIENCES.map((exp: Experience, index: number) => {
          const isOpen = openIndex === index;
          return (
            <article
              key={exp.company + exp.role}
              className={`timeline__item ${isOpen ? "timeline__item--open" : ""}`}
            >
              <button
                type="button"
                className="timeline__header"
                onClick={() => handleToggle(index)}
              >
                <div>
                  <h3 className="timeline__role">{exp.role}</h3>
                  <p className="timeline__company">{exp.company}</p>
                </div>
                <div className="timeline__meta">
                  <span>
                    {exp.start} – {exp.end}
                  </span>
                  <span>{exp.location}</span>
                </div>
              </button>

              {isOpen && (
                <div className="timeline__body">
                  <ul className="timeline__bullets">
                    {exp.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <div className="tag-row">
                    {exp.tech.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};
