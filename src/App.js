import React, { useReducer, useEffect, Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";

import Footer from "./Footer";
import MovieDetails from "./MovieDetails";


class App extends Component{
  constructor(props) {
    super(props)

    
  }

render(){
  return (
    <Route>
    <div>
      <Header text="MovieMania"/>
       
    </div>
   
    <main>
    
    <Route exact path="/" component={MovieDetails} />
    <Footer/>
      </main>
    </Route>
  )
}
}
export default App;