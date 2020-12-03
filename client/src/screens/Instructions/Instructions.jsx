import React from "react";
import { Link } from "react-router-dom";
import "./Instructions.css";

function Instructions(props) {
  return (
    <div className="instructions-container">
      <h1>Hello world</h1>
      <Link to="/game">
        <button>Start</button>
      </Link>
    </div>
  );
}

export default Instructions;
