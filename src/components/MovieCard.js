import React, { useContext } from "react";

import { GlobalContext } from "../GlobalContext/GlobalState";
import { Link } from "react-router-dom";
import { MovieControls } from "../components/MovieControls";

export const MovieCard = ({ movie, type, name }) => {
  const { ShowMoreInfo } = useContext(GlobalContext);

  return (
    <div>
      <div className="movie-card">
        <Link to="/moreinfo" onClick={() => ShowMoreInfo(movie)}>
          <div className="movie-link"> </div>
        </Link>
        <div className="overlay"> </div>
        <div className="movie-card_title">{`${name}`}</div>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Постер`}
          ></img>
        ) : (
          <div className="filler-poster"></div>
        )}
        <MovieControls type={type} movie={movie} />
        <p className="movie-card_average">{`Рейтинг: ${movie.vote_average}`}</p>
      </div>
    </div>
  );
};
