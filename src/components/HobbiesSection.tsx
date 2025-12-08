import React from "react";
import { HOBBIES, BOOKS } from "../cvData";
import TravellingImage from "../assets/travelling.jpg";
import MusicImage from "../assets/music.png";
import BooksImage from "../assets/books.png";
import PenImage from "../assets/pen.png";
import NovPoetImage from "../assets/novpoet.png";
import Book2Image from "../assets/book2.png";
import Book3Image from "../assets/book3.png";
import Book4Image from "../assets/book4.png";

type Hobby = {
  name: string;
  image: string;
};

type Book = {
  title: string;
  image: string;
  link: string;
};

export const HobbiesSection: React.FC = () => {
  const getHobbyImage = (imageName: string) => {
    if (imageName === "travelling.jpg") {
      return TravellingImage;
    } else if (imageName === "music.png") {
      return MusicImage;
    } else if (imageName === "books.png") {
      return BooksImage;
    } else if (imageName === "pen.png") {
      return PenImage;
    }
    return null;
  };

  const getBookImage = (imageName: string) => {
    if (imageName === "novpoet.png") {
      return NovPoetImage;
    } else if (imageName === "book2.png") {
      return Book2Image;
    } else if (imageName === "book3.png") {
      return Book3Image;
    } else if (imageName === "book4.png") {
      return Book4Image;
    }
    return null;
  };

  return (
    <section id="hobbies" className="section">
      <h2 className="section__title">Hobbies</h2>
      <p className="section__subtitle">
        Things I enjoy doing in my free time.
      </p>

      <div className="hobbies__grid">
        {HOBBIES.map((hobby: Hobby) => {
          const image = getHobbyImage(hobby.image);
          return (
            <div key={hobby.name} className="hobby__item">
              {image && (
                <img
                  src={image}
                  alt={hobby.name}
                  className="hobby__image"
                />
              )}
              <span className="hobby__name">{hobby.name}</span>
            </div>
          );
        })}
      </div>

      <div className="books__section">
        <h3 className="books__title">My Books</h3>
        <p className="books__subtitle">
          I have written these books since 2019:
        </p>
        <div className="books__grid">
          {BOOKS.map((book: Book) => {
            const image = getBookImage(book.image);
            return (
              <a
                key={book.title}
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="book__card"
              >
                {image && (
                  <img
                    src={image}
                    alt={book.title}
                    className="book__image"
                  />
                )}
                <span className="book__title">{book.title}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
