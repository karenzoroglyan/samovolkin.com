import React from "react";
import "./Source.css";

function Source({ url }) {
  return (
    <div className="source">
      <a href={url}>{url}</a>
    </div>
  );
}

export default Source;
