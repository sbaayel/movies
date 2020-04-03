import React from "react";
import { Link } from "react-router-dom";
import Popup from "./Popup"

// this block of code will render a default image when the imge that is returned from the API is broken 
// its refferenced from freecodecamp.org
const default_image =
  "https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg";


const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? default_image : movie.Poster;
  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <div>
       <Link to={`/movies/${movie.type}`}><img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        /></Link>
      </div>
      <p>({movie.Year}) </p>
      <Popup />
    </div>
  );
};


export default Movie;