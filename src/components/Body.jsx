import React from "react";
import Source from "./Source";
import "./Body.css";

function Body() {
  return (
    <div className="body__container">
      <Source url="https://t.me/samovolkin"/>
      <Source url="maksim@samovolkin.com" />
    </div>
  );
}

export default Body;
