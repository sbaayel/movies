import React from "react";

const Footer = (props) => {
  return (
    <div className="footer">
      <h2>{props.text}</h2>
      <p>powerd by omdb api</p>
    </div>
  );
};

export default Footer;

// This component is a functional component that renders the header tag with text props