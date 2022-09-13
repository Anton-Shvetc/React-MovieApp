import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext/GlobalState";
import useAuth from "../hooks/useAuth";

export const MovieControls = ({ type, movie }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);
  const auth = useAuth();

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <i className="fa-fw far fa-eye"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
            <i className="fa-fw far fa-eye-slash"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeFromWatched(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {auth.isLoaded &&
        (auth.user ? (
          <>
            {type === "topseries" && (
              <>
                <button
                  className="ctrl-btn"
                  onClick={() => moveToWatchlist(movie)}
                >
                  <i className="fa-fw far fa-eye-slash"></i>
                </button>

                <button
                  className="ctrl-btn"
                  onClick={() => addMovieToWatched(movie)}
                >
                  <i className="fa-fw far fa-eye"></i>
                </button>
              </>
            )}
            {type === "topfilms" && (
              <>
                <button
                  className="ctrl-btn"
                  onClick={() => moveToWatchlist(movie)}
                >
                  <i className="fa-fw far fa-eye-slash"></i>
                </button>

                <button
                  className="ctrl-btn"
                  onClick={() => addMovieToWatched(movie)}
                >
                  <i className="fa-fw far fa-eye"></i>
                </button>
              </>
            )}
            {type === "watched2" && (
              <>
                <button
                  className="ctrl-btn"
                  onClick={() => moveToWatchlist(movie)}
                >
                  <i className="fa-fw far fa-eye-slash"></i>
                </button>

                <button
                  className="ctrl-btn"
                  onClick={() => addMovieToWatched(movie)}
                >
                  <i className="fa-fw far fa-eye"></i>
                </button>
              </>
            )}
          </>
        ) : (
          <></>
        ))}
    </div>
  );
};
