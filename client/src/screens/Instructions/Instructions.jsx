import React from "react";
import { Link } from "react-router-dom";
import "./Instructions.css";

function Instructions(props) {
  return (
    <div className="container">
      <div className="instructions-container">
        <h1>How to Play:</h1>
        {/* <p>Type the words as they appear.</p>
        <p>Press SPACEBAR to submit your word!</p>
        <p>If the word turns red, you have made an error!</p>
        <p>Words must be error free to be submitted!</p>
        <p>You will win points for every correctly submitted word,</p> */}
        <p>
          Type the words as they appear. Press SPACEBAR to submit your word! If
          the given word turns red, you have made an error! Words must be error
          free to be submitted! You will win points for every correctly
          submitted word, as well as points for your average Words Per Minute!
          You will lose points for any errors!
        </p>
        <Link to="/game">
          <button>Start</button>
        </Link>
      </div>
    </div>
  );
}

export default Instructions;
