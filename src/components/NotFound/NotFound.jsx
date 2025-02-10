import React from "react";
import "./NotFound.css";

const NotFound = ({ message }) => {
  return (
    <div className="not-found">
      <h2>⛈️ Oops!</h2>
      <p>{message || "The city you're looking for doesn't exist."}</p>
    </div>
  );
};

export default NotFound;
