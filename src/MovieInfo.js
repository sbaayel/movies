import React from "react";
import { Route, Link } from "react-router-dom";

const MovieInfo = (props) => {
  return (
    <div>
      <h3>{props.text}</h3>
    </div>

  );
};

export default MovieInfo;