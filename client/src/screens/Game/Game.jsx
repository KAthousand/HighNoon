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
  const [gameStart, setGameStart] = useState(false);
  const {
    wordCount,
    setWordCount,
    setKeyStrokes,
    errorCount,
    setErrorCount,
  } = props;

  const getRandomWord = () => {
    return words[Math.floor(Math.random() * words.length)];
  };

  useEffect(() => {
    setWord(getRandomWord());
  }, []);

  useEffect(() => {
    if (error) {
      setErrorCount(errorCount + 1);
    }
  }, [error]);

  useEffect(() => {
    setTimeout(() => setGameCountDown("Set"), 1000);
    setTimeout(() => setGameCountDown("Go!"), 2000);
    setTimeout(() => setGameCountDown(""), 3000);
    setTimeout(() => setGameStart(true), 3000);
  }, []);

  const handleChange = (e) => {
    const wordArray = word.split("");
    const userInput = e.target.value;
    const userInputArray = userInput.split("");
    // console.log(userInputArray);
    const result = userInputArray.reduce((result, letter, idx) => {
      // console.log(letter);
      if (wordArray[idx] !== letter) {
        return true;
      }
    }, false);
    setError(result);
  };

  const handleSubmit = () => {
    keys.push(word.length);
    setKeyStrokes(keys);
    setWord(getRandomWord());
    setWordCount(wordCount + 1);
  };

  return (
    <div className="game-container">
      <div>
        <h3 className={gameStart ? "hidden" : "game-countdown"}>
          {gameCountDown}
        </h3>
      </div>
      {gameStart && (
        <>
          <div className="word-container">
            <h1 className={error ? "incorrect" : "correct"}>{word}</h1>
          </div>
          <div className="user-container">
            <UserInput
              word={word}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
            <Timer setGameStart={setGameStart} />
          </div>
        </>
      )}
    </div>
  );
}

export default Game;
