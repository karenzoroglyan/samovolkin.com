import React from "react";
import Source from "./Source";
import "./Body.css";

function Body() {
  return (
    <div className="body__container">
      <Source url={"Telegram src"} />
      <Source url={"Email src"} />
    </div>
  );
}

export default Body;
