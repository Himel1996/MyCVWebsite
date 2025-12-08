import React from "react";
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import huggingfaceIcon from "../assets/hf.png";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <h3 className="footer__title">Connect with me</h3>
        <div className="footer__links">
          <a
            href="https://github.com/Himel1996?tab=repositories"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <img src={githubIcon} alt="GitHub" className="footer__icon" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/himel-ghosh-954056162/"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="footer__icon" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://huggingface.co/himel7"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hugging Face Profile"
          >
            <img src={huggingfaceIcon} alt="Hugging Face" className="footer__icon" />
            <span>Hugging Face</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

