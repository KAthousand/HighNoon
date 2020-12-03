import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getAllScores } from "../../services/scores";
import Score from "../../components/Score/Score";
import "./ScoresContainer.css";

function ScoresContainer(props) {
  const [allScores, setAllScores] = useState([]);
  const { isSubmitting, setIsSubmitting } = props;
  const location = useLocation();

  useEffect(() => {
    fetchScores();
  }, [location]);

  const fetchScores = async () => {
    const scores = await getAllScores();
    setAllScores(scores);
  };

  return (
    <div>
      <div className="scoreboard-container">
        {allScores.map((score) => (
          <Score
            score={score}
            isSubmitting={isSubmitting}
            setIsSubmitting={setIsSubmitting}
            currentUser={props.currentUser}
            key={score.id}
          />
        ))}
      </div>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default ScoresContainer;
