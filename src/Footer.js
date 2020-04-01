import React from "react";

const Footer = (props) => {
  return (
    <footer className="App-header">
      <h2>{props.text}</h2>
    </footer>
  );
};

export default Footer;

// This component is a functional component that renders the header tag with text props