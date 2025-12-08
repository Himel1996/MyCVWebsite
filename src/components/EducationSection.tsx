import React from "react";
import { EDUCATION } from "../cvData";
import TUMLogo from "../assets/TUM.png";
import SapienzaLogo from "../assets/sapienza.png";
import MAKAUTLogo from "../assets/makaut.png";
import WBCHSELogo from "../assets/wbchse.png";

type Education = {
  degree: string;
  university: string;
  start: string;
  end: string;
  location: string;
  grade: string;
  subjects?: { [key: string]: string };
};

export const EducationSection: React.FC = () => {
  const getLogo = (university: string) => {
    if (university === "TU Munich") {
      return TUMLogo;
    } else if (university === "Sapienza University of Rome") {
      return SapienzaLogo;
    } else if (university === "Maulana Abul Kalam Azad University of Technology") {
      return MAKAUTLogo;
    } else if (university === "West Bengal Council of Higher Secondary Examination") {
      return WBCHSELogo;
    }
    return null;
  };

  return (
    <section id="education" className="section">
      <h2 className="section__title">Education</h2>
      <p className="section__subtitle">
        My academic journey and achievements.
      </p>

      <div className="timeline">
        {EDUCATION.map((edu: Education) => {
          const logo = getLogo(edu.university);
          return (
            <article key={edu.university + edu.degree} className="timeline__item">
              <div className="timeline__header">
                {logo && (
                  <img 
                    src={logo} 
                    alt={`${edu.university} logo`}
                    className="education__logo"
                  />
                )}
                <div className="education__content">
                  <h3 className="timeline__role">{edu.degree}</h3>
                  <p className="timeline__company">{edu.university}</p>
                </div>
                <div className="timeline__meta">
                  <span>
                    {edu.start} – {edu.end}
                  </span>
                  <span>{edu.location}</span>
                  <span className="education__grade">
                    Grade: {edu.grade}
                  </span>
                </div>
              </div>
              {edu.subjects && (
                <div className="timeline__body">
                  <div className="education__subjects">
                    {Object.entries(edu.subjects).map(([subject, grade]) => (
                      <div key={subject} className="education__subject-item">
                        <span className="education__subject-name">{subject}:</span>
                        <span className="education__subject-grade">{grade}</span>
                      </div>
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
