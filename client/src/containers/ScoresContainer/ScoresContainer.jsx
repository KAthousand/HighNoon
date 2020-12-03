import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteScore, getAllScores } from "../../services/scores";
import Score from "../../components/Score/Score";
import "./ScoresContainer.css";
import {
  postComment,
  deleteComment,
  putComment,
} from "../../services/comments";

function ScoresContainer(props) {
  const { allScores, setAllScores } = props;

  const handleCreateComment = async (scoreData) => {
    await postComment(scoreData);
    const newScores = await getAllScores();
    setAllScores(newScores);
  };

  const handleDeleteComment = async (id) => {
    await deleteComment(id);
    const newScores = await getAllScores();
    setAllScores(newScores);
  };

  const handleEditComment = async (id, commentData) => {
    await putComment(id, commentData);
    const newScores = await getAllScores();
    setAllScores(newScores);
  };

  const handleDelete = async (id) => {
    await deleteScore(id);
    setAllScores((prevState) => prevState.filter((score) => score.id !== id));
  };

  return (
    <div>
      <div className="scoreboard-container">
        {allScores.map((score) => (
          <Score
            score={score}
            currentUser={props.currentUser}
            key={score.id}
            handleDelete={handleDelete}
            handleCreateComment={handleCreateComment}
            handleDeleteComment={handleDeleteComment}
            handleEditComment={handleEditComment}
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
