import React, { useState, useEffect } from "react";
// import PlayerScoreCard from "../PlayerScoreCard/PlayerScoreCard";
import UserInput from "../../components/UserInput/UserInput";
import "./Game.css";
import Timer from "../../components/Timer/Timer";

const words = [
  "western",
  "cowboy",
  "pistol",
  "saloon",
  "sheriff",
  "boots",
  "cactus",
  "snake",
  "horse",
  "desert",
  "plains",
  "campfire",
  "outlaw",
  "bandit",
  "tumbleweed",
];
let keys = [];

function Game(props) {
  const [word, setWord] = useState("");
  const [error, setError] = useState(false);
  const [gameCountDown, setGameCountDown] = useState("Ready");

  const {
    wordCount,
    setWordCount,
    setKeyStrokes,
    errorCount,
    setErrorCount,
    outlaw,
    setOutlaw,
    gameStart,
    setGameStart,
    setCountdownTrigger,
  } = props;

  const getRandomWord = () => {
    return words[Math.floor(Math.random() * words.length)];
  };

  useEffect(() => {
    setWord(getRandomWord());
  }, []);

  useEffect(() => {
    setCountdownTrigger(true);
    setTimeout(() => setGameCountDown("Set"), 1000);
    setTimeout(() => setGameCountDown("Go!"), 2000);
    setTimeout(() => setGameCountDown(""), 3000);
    setTimeout(() => setGameStart(true), 3000);
  }, [setCountdownTrigger, setGameStart]);

  const handleChange = (e) => {
    const wordArray = word.split("");
    const userInput = e.target.value;
    const userInputArray = userInput.split("");
    const result = userInputArray.reduce((result, letter, idx) => {
      if (wordArray[idx] !== letter) {
        result = true;
        return result;
      }
      return false;
    }, false);
    setError(result);
    result && setErrorCount(errorCount + 1);
  };

  const handleSubmit = () => {
    keys.push(word.length);
    setKeyStrokes(keys);
    setWord(getRandomWord());
    setWordCount(wordCount + 1);
    setOutlaw(!outlaw);
  };

  return (
    <div className="game-container">
      <div className={gameStart ? "hidden" : "game-countdown"}>
        <h1>{gameCountDown}</h1>
      </div>
      {gameStart && (
        <>
          <div className={outlaw ? "word-container" : "word-container-two"}>
            <h1 className={error ? "incorrect" : "correct"}>{word}</h1>
          </div>
          <div className="user-container">
            <UserInput
              word={word}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
            <Timer
              setGameStart={setGameStart}
              setCountdownTrigger={setCountdownTrigger}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Game;
