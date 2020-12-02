import React, { useState, useEffect } from "react";
import UserInput from "../../components/UserInput/UserInput";
import "./Game.css";

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

function Game(props) {
  const [word, setWord] = useState("");
  const [error, setError] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  const getRandomWord = () => {
    return words[Math.floor(Math.random() * words.length)];
  };

  useEffect(() => {
    setWord(getRandomWord());
  }, []);

  const handleChange = (e) => {
    const wordArray = word.split("");
    const userInput = e.target.value;
    const userInputArray = userInput.split("");
    console.log(userInputArray);
    const result = userInputArray.reduce((result, letter, idx) => {
      // console.log(letter);
      if (wordArray[idx] !== letter) {
        return true;
      }
    }, false);
    setError(result);
  };
  const handleSubmit = () => {
    setWord(getRandomWord());
    setWordCount(wordCount + 1);
  };

  return (
    <div>
      <h1 className={error ? "incorrect" : "correct"}>{word}</h1>
      <UserInput
        word={word}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Game;
