import React, { useState } from "react";
import Comment from "../Comment/Comment";
import CreateComment from "../CreateComment/CreateComment";
import "./Score.css";
// import { deleteScore } from "../../services/scores";

function Score(props) {
  const [showComments, setShowComments] = useState(false);
  const {
    score,
    currentUser,
    handleDelete,
    handleDeleteComment,
    handleCreateComment,
    handleEditComment,
  } = props;

  return (
    <React.Fragment>
      <div className="score-container">
        <div className="score-content">
          <h1>{score.score}</h1>
          <h5>{score.user.username}</h5>
        </div>
        <div className="button-container">
          {showComments === false ? (
            <button onClick={() => setShowComments(true)}>Comments</button>
          ) : (
            <button onClick={() => setShowComments(false)}>Hide</button>
          )}
          {currentUser.username === score.user.username && (
            <button
              onClick={(e) => {
                e.preventDefault();
                handleDelete(score.id);
              }}
            >
              Delete
            </button>
          )}
        </div>
      </div>
      {showComments && (
        <CreateComment
          key={score.id}
          scoreData={score}
          handleCreateComment={handleCreateComment}
        />
      )}
      {showComments &&
        score.comments.map((comment) => (
          <Comment
            comment={comment}
            currentUser={currentUser}
            key={comment.id}
            handleEditComment={handleEditComment}
            handleDeleteComment={handleDeleteComment}
          />
        ))}
    </React.Fragment>
  );
}

export default Score;
