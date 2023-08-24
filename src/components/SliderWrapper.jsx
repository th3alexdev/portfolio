import React from "react";
import movies from "../data/movies";
import SliderCard from "./SliderCard";
import { useTranslation } from "react-i18next";

export default function SliderWrapper() {
  const [t] = useTranslation("global");

  const moviesTrack = [...movies, ...movies];

  return (
    <>
      <div className="slider">
        {moviesTrack.map((movie) => (
          <div className="slider-track">
            <SliderCard movie={movie} key={movie.id} />
          </div>
        ))}
      </div>
      <div className="wrapper-text">
        <h3>{t("movies.title")}</h3>
      </div>
    </>
  );
}
