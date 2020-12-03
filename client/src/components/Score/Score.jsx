import React, { useState } from "react";
import Comment from "../Comment/Comment";
import CreateComment from "../CreateComment/CreateComment";
import "./Score.css";
import { deleteScore } from "../../services/scores";

function Score(props) {
  const [showComments, setShowComments] = useState(false);
  const { score, setIsSubmitting, currentUser } = props;

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
              setIsSubmitting(true);
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
          setIsSubmitting={setIsSubmitting}
        />
      )}
      {showComments &&
        score.comments.map((comment) => (
          <Comment
            comment={comment}
            currentUser={currentUser}
            key={comment.id}
          />
        ))}
    </React.Fragment>
  );
}

export default Score;
