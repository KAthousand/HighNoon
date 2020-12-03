import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Timer(props) {
  const { gameStart, setGameStart } = props;
  const [timeLeft, setTimeLeft] = useState(10);
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    if (timeLeft === 0) {
      setGameStart(false);
      history.push("/score-card");
    }
    return () => {
      clearTimeout(timer);
    };
  }, [timeLeft]);

  // if (gameStart === false) {
  //   <Redirect to={"/score-card"} />;
  // }
  // const timer = setInterval(() => {
  //   setTimeLeft(timer - 1);
  // }, 1000);

  return (
    <div className="timer">
      <h4>{`0:${timeLeft}`}</h4>
      {/* {gameStart === false && <Redirect to={"/score-card"} />} */}
    </div>
  );
}

export default Timer;
