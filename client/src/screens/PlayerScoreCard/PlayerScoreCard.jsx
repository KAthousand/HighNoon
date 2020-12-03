import React from "react";
import { Link, useHistory } from "react-router-dom";
import { postScore } from "../../services/scores";

function PlayerScoreCard(props) {
  const {
    wordCount,
    setWordCount,
    keyStrokes,
    setKeyStrokes,
    errorCount,
    setErrorCount,
    setIsSubmitting,
  } = props;
  const history = useHistory();
  const resetGame = (keys) => {
    setWordCount(0);
    setErrorCount(0);
    setKeyStrokes([]);
    setIsSubmitting(false);
    keys = 0;
  };

  let keys;
  keys = keyStrokes.reduce((a, b) => a + b, 0);
  console.log(keys);

  const result = Math.floor(keys / 5 + wordCount - errorCount);

  return (
    <div>
      <h4>Avg. Words Per Minute....{Math.floor(keys / 5)}</h4>
      <h4>Total Error Count....{String(errorCount)}</h4>
      <h4>Total Word Count.....{String(wordCount)}</h4>
      <h2> Total Points....{String(result)}</h2>
      <Link to="/">
        <button onClick={() => resetGame(keys)}>Main Menu</button>
      </Link>
      <button
        onClick={(e) => {
          e.preventDefault();
          debugger;
          postScore({
            score: String(result),
          });
          setIsSubmitting(true);
          resetGame();
          history.push("/scores");
        }}
      >
        Submit Score
      </button>
    </div>
  );
}

export default PlayerScoreCard;
