import React from "react";
import { useToggle } from "@uidotdev/usehooks";
import { Card, ContactLinks, Footer, HeaderNav, SliderCard } from "./routes.js";
import projects from "./data/projects";
import movies from "./data/movies";
import { useTranslation } from "react-i18next";
import "./scss/styles.scss";

function App() {
  const [on, toggle] = useToggle(false);
  const [t] = useTranslation("global");

  return (
    <>
      <header className="header">
        <HeaderNav on={on} toggle={toggle} />
      </header>
      <main className="main" onClick={on ? toggle : null}>
        <section id="home" className="home" aria-labelledby="homeTitle">
          <div className="home-container">
            <div className="home__profile">
              <h1 id="homeTitle" className="home-title">
                <span className="name">Alexander</span>
                <span className="name">Pérez</span>
              </h1>
              <h2 className="home-text home__profile-text">
                {t("home.primary")}
              </h2>
              <ContactLinks needsUserInteraction={true} size="md" />
            </div>
            <div className="home__image">
              <div className="home__image-container">
                <img
                  src="/assets/alexanderperez.webp"
                  alt="Image of the presentation photo of the Frontend Developer Alexander Perez"
                  className="img"
                  role="presentation"
                />
              </div>
              <p className="home-text home-text--right">
                {t("home.secondary")}
              </p>
            </div>
          </div>
          <span className="mouse"></span>
        </section>
        <section
          id="projects"
          className="projects"
          aria-labelledby="projectsTitle"
        >
          <div className="cards-display" role="list">
            {projects.map((project) => (
              <Card key={project.id} project={project} />
            ))}
          </div>
          {/* <div className='projects__view-all'>
                 <a href='#allproject'>{t('projects.moreprojects')}</a>
                 <img src='./src/assets/icons/north-east.svg' alt='' className='icon'/>
              </div> */}
        </section>
        <section id="about" className="about">
          <h1 className="about-title">{t("about.title")}</h1>
          <div className="about-container">
            <div className="about-content">
              <p className="text">{t("about.fst")}</p>
              <p className="text">{t("about.snd")}</p>
              <p className="text">{t("about.thd")}</p>
              <p className="text">{t("about.fth")}</p>
            </div>
            <div className="about-tools">
              <ul className="tools">
                <li className="tools__li">
                  <h2 className="tools__li-title">
                    {t("about.tools.frontend.title")}
                  </h2>
                  <p className="tools__li-desc">
                    JavaScript(ES6+), React, TypeScript, Vitejs, HTML5,
                    Git/GitHub
                  </p>
                </li>
                <li className="tools__li">
                  <h2 className="tools__li-title">
                    {t("about.tools.ui.title")}
                  </h2>
                  <p className="tools__li-desc">
                    CSS3/SCSS/SASS, Tailwind, Bootstrap
                  </p>
                </li>
                <li className="tools__li">
                  <h2 className="tools__li-title">
                    {t("about.tools.backend.title")}
                  </h2>
                  <p className="tools__li-desc">PHP, MySQL</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="wrapper">
          <div className="slider">
            <div className="slider-track">
              {movies.map((movie, index) => (
                <SliderCard movie={movie} key={index} />
              ))}
            </div>
            <div className="slider-track">
              {movies.map((movie, index) => (
                <SliderCard movie={movie} key={index} />
              ))}
            </div>
          </div>
          <div className="wrapper-text">
            <h3>{t("movies.title")}</h3>
          </div>
        </section>
        <section
          id="contact"
          className="contact"
          aria-labelledby="contactTitle"
        >
          <div className="contact-container">
            <div className="contact-title">
              <h1 id="contactTitle" className="title contact-title__main">
                {t("contact.bg-title")}
              </h1>
              <div className="contact-title__secondary">
                <p>{t("contact.text")}</p>
                <ContactLinks needsUserInteraction={false} size="sm" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
