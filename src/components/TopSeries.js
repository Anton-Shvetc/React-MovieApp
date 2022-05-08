import React, { useState } from "react";

import { MovieCard } from "./MovieCard";

export const TopSeries = () => {
  const [items, setResults] = useState([]);

  const api_url = "https://api.themoviedb.org";

  const REACT_APP_TMDB_KEY = "b03ab547ea41fd0143dde1d1a019143e";
  const language = "ru";
  const type = "tv";

  const fetchData = () => {
    fetch(
      `${api_url}/3/discover/${type}?api_key=${REACT_APP_TMDB_KEY}&language=${language}&ith_genre=27}`
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
          <h1 className="heading">Сериалы</h1>
        </div>
        <div></div>
        <div className="movie-grid">
          {items &&
            items.map((items) => {
              return (
                <MovieCard
                  movie={items}
                  key={items.id}
                  type="topseries"
                  name={items.name}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
