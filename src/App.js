import React, {  Component } from "react";
import { Route} from "react-router-dom";
import "./App.css";
import Header from "./Header";

import Footer from "./Footer";
import Main from "./Main";



class App extends Component{
  

render(){
  return (
    
    <Route>
      
      <div className="app">
        <Header text="MovieManiak"/>
        <Main />
        <Footer text="&copy; 2020. Sebastian Baayel"/>
      </div>
    </Route>
  )
}
}
export default App;