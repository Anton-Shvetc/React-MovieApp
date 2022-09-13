import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext/GlobalState";
import { MovieCard } from "./MovieCard";

export const Watched = () => {
  const { watched } = useContext(GlobalContext);
  const movielist = Object.values(
    watched.reduce((acc, cur) => Object.assign(acc, { [cur.id]: cur }), {})
  );
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Просмотренные фильмы</h1>
          <span className="count-pill">
            {movielist.length} {movielist.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>
        {movielist.length > 0 ? (
          <div className="movie-grid">
            {movielist.map((movie) => {
              if (movie.title !== undefined) {
                return (
                  <MovieCard
                    movie={movie}
                    key={movie.id}
                    type="watched"
                    name={movie.title}
                  />
                );
              } else {
                return (
                  <MovieCard
                    movie={movie}
                    key={movie.id}
                    type="watched"
                    name={movie.name}
                  />
                );
              }
            })}
          </div>
        ) : (
          <h2 className="no-movies">Нет фильмов </h2>
        )}
      </div>
    </div>
  );
};
