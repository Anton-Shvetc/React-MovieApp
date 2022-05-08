import React, { useState } from "react";

import { MovieCard } from "./MovieCard";

export const TopFilms = () => {
  const [items, setResults] = useState([]);

  const REACT_APP_TMDB_KEY = "b03ab547ea41fd0143dde1d1a019143e";

  const fetchData = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc&api_key=${REACT_APP_TMDB_KEY}&language=ru`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };
  fetchData();
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Фильмы</h1>
        </div>
        <div></div>
        <div className="movie-grid">
          {items &&
            items.map((items) => {
              return (
                <MovieCard
                  movie={items}
                  key={items.id}
                  type="topfilms"
                  name={items.title}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
