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
  } = props;
  const history = useHistory();
  const resetGame = () => {
    setWordCount(0);
    setErrorCount(0);
    setKeyStrokes([]);
  };

  const result = keyStrokes.length / 5 + wordCount - errorCount;
  return (
    <div>
      <h4>Avg. Words Per Minute....{String(keyStrokes.length / 5)}</h4>
      <h4>Total Error Count....{String(errorCount)}</h4>
      <h4>Total Word Count.....{String(wordCount)}</h4>
      <h2> Total Points....{String(result)}</h2>
      <Link to="/">
        <button onClick={() => resetGame()}>Main Menu</button>
      </Link>
      <button
        onClick={(e) => {
          e.preventDefault();
          postScore({
            score: String(result),
          });
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
