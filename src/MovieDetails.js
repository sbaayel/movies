import React, { useReducer, useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";

import Movie from "./Movie";
import Search from "./Search";
import Footer from "./Footer";


const apiUrl = "https://www.omdbapi.com/?s=man&apikey=3fcaeba9";


const initialState = {
  loading: true,
  movies: [],
  errorMessage: null
};


const reducer = (state, action) => {
  switch (action.type) {
    case "movie_search":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "success":
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    case "failure":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};



const MovieDetails = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
    
        fetch(apiUrl)
            .then(response => response.json())
            .then(jsonResponse => {
        
            dispatch({
                type: "success",
                payload: jsonResponse.Search
        	});
      	});
  	}, []);

    const search = searchValue => {
    	dispatch({
      	type: "movie_search"
    	});
	
        fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=3fcaeba9`)
      	.then(response => response.json())
      	.then(jsonResponse => {
        	if (jsonResponse.Response === "True") {
          	dispatch({
                type: "success",
                payload: jsonResponse.Search
          	});
        	} else {
          	dispatch({
                type: "failure",
                error: jsonResponse.Error
          	});
          }
      	});
	  };

    const { movies, errorMessage, loading } = state;

    return (
      <div className="App">
       
      
        <section>

          <Search search={search} />
          
      <p className="App-intro">Sharing a few of our favourite movies</p>
       
        </section>
      
      <main className="movies">
        {loading && !errorMessage ? (
          <span>loading... </span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
              )}
          

          <Route render={routerProps => <Movie movie={this.state.movie} {...routerProps} />} path="/movies/:poster" />
          
        </main>
        <footer><Footer text="&copy; copyright"/></footer>
    </div>
  );
};

export default MovieDetails;
