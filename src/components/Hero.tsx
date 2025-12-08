import React from "react";
import himelImage from "../assets/HimelGhosh.jpg";

export const Hero: React.FC = () => {
  return (
    <section id="about" className="section hero">
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">Hello, I'm</p>
          <h1 className="hero__title">Himel Ghosh</h1>
          <p className="hero__subtitle">
            AI Engineer & Full-Stack Developer interested in building
            production-ready AI-powered applications.
          </p>

          <p className="hero__text">
            I combine a strong background in Data Science, AI and NLP with hands-on
            experience building web applications using React, TypeScript and REST
            APIs. I enjoy turning complex ideas into usable products and working
            closely with teams to ship value fast.
          </p>

          <div className="hero__buttons">
            <a href="#projects" className="btn primary">
              View projects
            </a>
            <a href="#experience" className="btn ghost">
              Work experience
            </a>
          </div>
        </div>
        <div className="hero__image-wrapper">
          <img 
            src={himelImage} 
            alt="Himel Ghosh" 
            className="hero__image"
          />
        </div>
      </div>
    </section>
  );
};
