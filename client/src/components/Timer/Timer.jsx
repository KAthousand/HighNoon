import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Timer(props) {
  const { gameStart, setGameStart } = props;
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    // if (timeLeft === 0) {
    //   history.pushState("/");
    // }
  }, [timeLeft]);

  // const timer = setInterval(() => {
  //   setTimeLeft(timer - 1);
  // }, 1000);

  return (
    <div className="timer">
      <h4>{`0:${timeLeft}`}</h4>
    </div>
  );
}

export default Timer;
