import React, { useState } from "react";
import { ResultCard } from "./ResultCard";

export const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const REACT_APP_TMDB_KEY = "b03ab547ea41fd0143dde1d1a019143e";

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);
    console.log(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_TMDB_KEY}&language=ru&query=${e.target.value}`
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

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Поиск фильмов"
              value={query}
              onChange={onChange}
            />
          </div>

          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>{<ResultCard movie={movie} />}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
