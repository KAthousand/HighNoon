import React, { useState } from "react";
import Comment from "../Comment/Comment";
import CreateComment from "../CreateComment/CreateComment";
import "./Score.css";
import { deleteScore } from "../../services/scores";

function Score(props) {
  const [showComments, setShowComments] = useState(false);
  const { score, isSubmitting, setIsSubmitting, currentUser } = props;

  return (
    <React.Fragment>
      <div className="score-container">
        <h1>{score.score}</h1>
        <h5>{score.user.username}</h5>

        {showComments === false ? (
          <button onClick={() => setShowComments(true)}>Comments</button>
        ) : (
          <button onClick={() => setShowComments(false)}>Hide</button>
        )}
        {currentUser.username === score.user.username && (
          <button
            onClick={(e) => {
              e.preventDefault();
              deleteScore(score.id);
              setIsSubmitting(!isSubmitting);
            }}
          >
            Delete
          </button>
        )}
      </div>
      {showComments && (
        <CreateComment
          key={score.id}
          scoreData={score}
          isSubmitting={isSubmitting}
          setIsSubmitting={setIsSubmitting}
        />
      )}
      {showComments &&
        score.comments.map((comment) => (
          <Comment
            comment={comment}
            scoreData={score}
            currentUser={currentUser}
            key={comment.id}
            isSubmitting={isSubmitting}
            setIsSubmitting={setIsSubmitting}
          />
        ))}
    </React.Fragment>
  );
}

export default Score;
