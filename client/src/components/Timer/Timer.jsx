import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Timer.css";

function Timer(props) {
  const { setGameStart, setCountdownTrigger } = props;
  const [timeLeft, setTimeLeft] = useState(59);
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    if (timeLeft === 0) {
      setGameStart(false);
      setCountdownTrigger(false);
      history.push("/score-card");
    }
    return () => {
      clearTimeout(timer);
    };
  }, [timeLeft, history, setGameStart, setCountdownTrigger]);

  return (
    <div className="timer-container">
      {timeLeft > 9 ? (
        <h4>{`0:${timeLeft}`}</h4>
      ) : (
        <h4 className="timer-low">{`0:0${timeLeft}`}</h4>
      )}
    </div>
  );
}

export default Timer;
