import React from "react";

export default function ContactLinks({ needsUserInteraction, size }) {
  return (
    <div
      className="home__profile-connect get-in-touch home-animation"
      data-animation="slide-right-blurred"
    >
      <ul
        className={`get-in-touch-list ${
          needsUserInteraction ? "needsUserInteraction" : ""
        }`}
      >
        <li className="get-in-touch-list__item">
          <a
            href="https://twitter.com/th3alexdev"
            className="link"
            target="_blank"
            aria-label="GitHub profile"
          >
            <img
              src="/icons/twitter.svg"
              alt="Twitter"
              className={`get-in-touch__icon get-in-touch__icon--${size}`}
            />
          </a>
        </li>
        <li className="get-in-touch-list__item">
          <a
            href="https://github.com/th3alexdev"
            className="link"
            target="_blank"
            aria-label="Twitter profile"
          >
            <img
              src="/icons/github-white.svg"
              alt="GitHub"
              className={`get-in-touch__icon get-in-touch__icon--${size}`}
            />
          </a>
        </li>
        <li className="get-in-touch-list__item">
          <a
            href="https://www.linkedin.com/in/alexander-p%C3%A9rez-graterol-b60b26265/"
            className="link"
            target="_blank"
            aria-label="LinkedIn profile"
          >
            <img
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              className={`get-in-touch__icon get-in-touch__icon--${size}`}
            />
          </a>
        </li>
        <li className="get-in-touch-list__item">
          <a
            href="mailto:dev.alexanderperez@protonmail.com"
            className="link"
            aria-label="Email"
          >
            <img
              src="/icons/send-email.svg"
              alt="Email"
              className={`get-in-touch__icon get-in-touch__icon--${size}`}
            />
          </a>
        </li>
      </ul>
    </div>
  );
}