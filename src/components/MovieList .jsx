import React from "react";
import { Link } from "react-router-dom";
import { movies } from "../movies";

const MovieList = () => {
  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
