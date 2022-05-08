import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext/GlobalState";

import useAuth from "../hooks/useAuth";

export const MovieCardInfo = ({ movie, name, type }) => {
  const auth = useAuth();
  const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } =
    useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="movie-info">
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`${movie.title} Постер`}
        ></img>
      ) : (
        <div className="filler-poster"></div>
      )}
      <div className="movie-text">
        <div className="overlay"> </div>

        <div className="movie-card_overview">{`${movie.overview}`}</div>
        <p className="movie-card_average">
          <b>Рейтинг:</b>
          {` ${movie.vote_average}`}
        </p>

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
