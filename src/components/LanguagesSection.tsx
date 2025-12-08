import React from "react";
import { LANGUAGES } from "../cvData";

type Language = {
  name: string;
  proficiency: string;
};

export const LanguagesSection: React.FC = () => {
  return (
    <section id="languages" className="section">
      <h2 className="section__title">Language Proficiency</h2>
      <p className="section__subtitle">
        Languages I speak and write.
      </p>

      <div className="languages__grid">
        {LANGUAGES.map((language: Language) => (
          <div key={language.name} className="language__item">
            <span className="language__name">{language.name}</span>
            <span className="language__proficiency">{language.proficiency}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
