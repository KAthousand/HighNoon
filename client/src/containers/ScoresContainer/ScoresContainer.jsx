import React, { useState, useEffect } from "react";
import { getAllScores } from "../../services/scores";
import Scores from "../../components/Scores/Scores";
import { postComment, getAllComments } from "../../services/comments";

function ScoresContainer(props) {
  const [allScores, setAllScores] = useState([]);
  const [allComments, setAllComments] = useState([]);
  // const history = useHistory();

  useEffect(() => {
    fetchScores();
    fetchComments();
  }, []);

  const fetchScores = async () => {
    const scores = await getAllScores();
    setAllScores(scores);
  };

  const fetchComments = async () => {
    const comments = await getAllComments();
    setAllComments(comments);
  };

  const createComment = async (commentData) => {
    const newComment = await postComment(commentData);
    setAllComments((prevState) => [...prevState, newComment]);
  };
  return (
    <div>
      <Scores allScores={allScores} createComment={createComment} />
    </div>
  );
}

export default ScoresContainer;
