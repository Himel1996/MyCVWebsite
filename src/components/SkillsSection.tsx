import React, { useState } from "react";
import { SKILL_CATEGORIES } from "../cvData";
type SkillCategory = {
    name: string;
    skills: string[];
}

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(
    SKILL_CATEGORIES[0]?.name ?? ""
  );

  const currentCategory: SkillCategory | undefined = SKILL_CATEGORIES.find(
    (cat) => cat.name === activeCategory
  );

  return (
    <section id="skills" className="section">
      <h2 className="section__title">Skills</h2>
      <p className="section__subtitle">
        Select a category to see related skills.
      </p>

      <div className="pill-row">
        {SKILL_CATEGORIES.map((cat) => (
          <button
            key={cat.name}
            type="button"
            className={`pill ${cat.name === activeCategory ? "pill--active" : ""}`}
            onClick={() => setActiveCategory(cat.name)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {currentCategory?.skills.map((skill) => (
          <div key={skill} className="skills-grid__item">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};
