import React from "react";
import { Route } from "react-router-dom";
import MovieDetails from "./MovieDetails"

const Main = (props) => {
  return (
    <div className="main">
      <Route exact path="/" component={MovieDetails} />

      <h3>Sorry movie not available....!!!</h3>
    </div>


  );
};

export default Main;