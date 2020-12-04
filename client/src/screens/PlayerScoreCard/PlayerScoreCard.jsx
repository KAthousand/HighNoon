import React from "react";
import { Link, useHistory } from "react-router-dom";
import { postScore, getAllScores } from "../../services/scores";
import "./PlayerScoreCard.css";

function PlayerScoreCard(props) {
  const {
    wordCount,
    setWordCount,
    keyStrokes,
    setKeyStrokes,
    errorCount,
    setErrorCount,
    setAllScores,
  } = props;
  const history = useHistory();
  const resetGame = (keys) => {
    setWordCount(0);
    setErrorCount(0);
    setKeyStrokes([]);
    keys = 0;
  };

  const handleCreate = async (scoreData) => {
    await postScore(scoreData);
    const newScores = await getAllScores();
    setAllScores(newScores);
  };

  let keys;
  keys = keyStrokes.reduce((a, b) => a + b, 0);
  console.log(keys);

  const result = Math.floor(keys / 5 + wordCount - errorCount);

  return (
    <div className="container">
      <div className="logo"></div>
      <div className="player-score-content">
        <h4>Avg. Words Per Minute....{Math.floor(keys / 5)}</h4>
        <h4>Total Error Count........{String(errorCount)}</h4>
        <h4>Total Word Count.........{String(wordCount)}</h4>
        <h1> Total Points....{String(result)}</h1>
      </div>
      <div className="score-card-button-container">
        <Link to="/">
          <button onClick={() => resetGame(keys)} className="scoreboard-button">
            Main Menu
          </button>
        </Link>
        <button
          className="scoreboard-button"
          onClick={(e) => {
            e.preventDefault();
            handleCreate({
              score: String(result),
            });
            resetGame();
            history.push("/scores");
          }}
        >
          Submit Score
        </button>
      </div>
    </div>
  );
}

export default PlayerScoreCard;
