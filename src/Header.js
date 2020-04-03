import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="App-header">
      <Link to="/"><a>{props.text}</a></Link>
    </header>


  );
};

export default Header;

// This component is a functional component that renders the header tag with text props