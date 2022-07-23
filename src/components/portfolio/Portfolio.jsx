import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";

// DO NOT USE THE IMAGE IN PRODUCTION ELSE I MIGHT GET IN TROUBLE

const data = [
  {
    id: 4,
    image: IMG4,
    title: "Airbnb Clone",
    github: "https://github.com",
    demo: "https://reserva-ql8556vp6-phallaboramey19-kitedukh.vercel.app/",
  },
  {
    id: 1,
    image: IMG2,
    title: "Triper Clone",
    github: "https://github.com",
    demo: "https://flighttesting-849fb.web.app/",
  },

  {
    id: 3,
    image: IMG1,
    title: "Netflix Clone",
    github: "https://github.com",
    demo: "https://netflix-clone-cbe51.web.app/",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5 className="text-black">My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3 className="text-black">{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
