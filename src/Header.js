import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="App-header">
      <Link to="/"><h2>{props.text}</h2></Link>
    </header>


  );
};

export default Header;

// This component is a functional component that renders the header tag with text props