import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Timer(props) {
  const { setGameStart } = props;
  const [timeLeft, setTimeLeft] = useState(15);
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

  return (
    <div className="timer">
      {timeLeft > 9 ? <h4>{`0:${timeLeft}`}</h4> : <h4>{`0:0${timeLeft}`}</h4>}
    </div>
  );
}

export default Timer;
