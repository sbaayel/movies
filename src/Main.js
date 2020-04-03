import React from "react";
import { Route } from "react-router-dom";
import MovieDetails from "./MovieDetails"

const Main = (props) => {
  return (
    <div className="main">
      <Route exact path="/" component={MovieDetails} />
    </div>


  );
};

export default Main;