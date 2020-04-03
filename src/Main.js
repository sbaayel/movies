import React from "react";
import { Route } from "react-router-dom";
import MovieDetails from "./MovieDetails"
import MovieInfo from "./MovieInfo";

const Main = (props) => {
  return (
    <div className="main">
      <Route exact path="/" component={MovieDetails} />

      <Route path="/movies/poster" component={MovieInfo} />
    </div>


  );
};

export default Main;