import React from "react";
import './App.css';
import {NavBar} from "./components/NavBar.tsx";
import {Hero} from "./components/Hero.tsx";
import {ExperienceSection} from "./components/ExperienceSection.tsx";
import { SkillsSection } from "./components/SkillsSection.tsx";
import { ProjectsSection } from "./components/ProjectsSection.tsx";
import { EducationSection } from "./components/EducationSection.tsx";
import { AchievementsSection } from "./components/AchievementsSection.tsx";
import { LanguagesSection } from "./components/LanguagesSection.tsx";
import { HobbiesSection } from "./components/HobbiesSection.tsx";
import { Footer } from "./components/Footer.tsx";

const App: React.FC= ()=>{
  return (
    <div className="app">
      <NavBar />
      <main className="main">
        <Hero/>
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <AchievementsSection />
        <LanguagesSection />
        <HobbiesSection />
      </main>
      <Footer />
    </div>
  );

};

export default App
