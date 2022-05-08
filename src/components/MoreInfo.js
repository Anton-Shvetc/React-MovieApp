import React, { useContext } from "react";

import { GlobalContext } from "../GlobalContext/GlobalState";
import { MovieCardInfo } from "./MovieCardInfo";

export const MoreInfo = () => {
  const { watched2 } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading heading-card_info">
            {watched2[0].title} {watched2[0].name}
          </h1>
        </div>

        <div className="movie-grid_info">
          {watched2.map((movie) => {
            if (movie.title !== undefined) {
              return (
                <MovieCardInfo
                  movie={movie}
                  key={movie.id}
                  type="watched2"
                  name={movie.title}
                />
              );
            } else {
              return (
                <MovieCardInfo
                  movie={movie}
                  key={movie.id}
                  type="watched2"
                  name={movie.name}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};
