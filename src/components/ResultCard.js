import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext/GlobalState";
import { Link } from "react-router-dom";

import useAuth from "../hooks/useAuth";

export const ResultCard = ({ movie }) => {
  const auth = useAuth();
  const {
    addMovieToWatchlist,
    addMovieToWatched,
    watchlist,
    watched,
    ShowMoreInfo,
  } = useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        <Link to="/moreinfo" onClick={() => ShowMoreInfo(movie)}>
          <div className="movie-link"> </div>
        </Link>

        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Постер`}
          ></img>
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
        </div>
        <div className="controls">
          {auth.isLoaded &&
            (auth.user ? (
              <>
                <button
                  className="btn"
                  disabled={watchlistDisabled}
                  onClick={() => addMovieToWatchlist(movie)}
                >
                  Хочу посмотреть
                </button>
                <button
                  className="btn"
                  disabled={watchedDisabled}
                  onClick={() => addMovieToWatched(movie)}
                >
                  Уже смотрел
                </button>
              </>
            ) : (
              <></>
            ))}
        </div>
      </div>
    </div>
  );
};
