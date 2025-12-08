import React from "react";

export const NavBar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo">CV • Himel Ghosh</div>
      <nav className="navbar__links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#achievements">Achievements</a>
        <a href="#languages">Languages</a>
        <a href="#hobbies">Hobbies</a>
      </nav>
      <a
        className="navbar__cta"
        href="mailto:himelghosh1996@gmail.com?subject=Interview%20Request"
      >
        Contact
      </a>
    </header>
  );
};
