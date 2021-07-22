import React from "react";
import { movies } from "../data";

function Movies() {
  const movieList = movies.map((element) => (
    <div key={element.title}>
      <h2>Name: {element.title}</h2>
      <p>Time: {element.time} min.</p>
      <p>Genres:</p>
      <ul>
        {element.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
    </div>
  );
}

export default Movies;

