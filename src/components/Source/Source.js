import React from "react";
import "./Source.css";

function Source({ url, Icon }) {
  return (
    <div className="source">
      {Icon && <Icon className="icon" />}
      <a href={url}>{url}</a>
    </div>
  );
}

export default Source;
