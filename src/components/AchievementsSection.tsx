import React from "react";
import { ACHIEVEMENTS } from "../cvData";
import SUSImage1 from "../assets/sus.png";
import SUSImage2 from "../assets/sus1.png";
import KPMGImage from "../assets/kpmg.JPG";

type Achievement = {
  title: string;
  organizer: string;
  location: string;
  year: string;
  award: string;
  images: string[];
};

export const AchievementsSection: React.FC = () => {
  const getImage = (imageName: string) => {
    if (imageName === "sus.png") {
      return SUSImage1;
    } else if (imageName === "sus1.png") {
      return SUSImage2;
    } else if (imageName === "kpmg.JPG") {
      return KPMGImage;
    }
    return null;
  };

  return (
    <section id="achievements" className="section">
      <h2 className="section__title">Achievements</h2>
      <p className="section__subtitle">
        Recognition and awards from competitions and hackathons.
      </p>

      <div className="achievements__grid">
        {ACHIEVEMENTS.map((achievement: Achievement) => {
          const imageCount = achievement.images.length;
          return (
            <article key={achievement.title} className="achievement__card">
              <div className={`achievement__images achievement__images--${imageCount}`}>
                {achievement.images.map((imgName, index) => {
                  const img = getImage(imgName);
                  return img ? (
                    <img
                      key={index}
                      src={img}
                      alt={`${achievement.title} - Image ${index + 1}`}
                      className="achievement__image"
                    />
                  ) : null;
                })}
              </div>
            <div className="achievement__content">
              <h3 className="achievement__title">{achievement.title}</h3>
              <p className="achievement__organizer">
                Organised by {achievement.organizer}
              </p>
              <p className="achievement__location">
                {achievement.location} - {achievement.year}
              </p>
              <p className="achievement__award">{achievement.award}</p>
            </div>
          </article>
          );
        })}
      </div>
    </section>
  );
};
