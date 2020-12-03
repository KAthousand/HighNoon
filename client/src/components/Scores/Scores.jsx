import React, { useState } from "react";
import "./Scores.css";

function Scores(props) {
  const { allScores, allComments, createComment } = props;
  const [shownComments, setShownComments] = useState({});
  const [showCreate, setShowCreate] = useState(false);
  const [formData, setFormData] = useState({
    content: "",
  });

  const { content } = formData;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const fetchOneScore = async (id) => {
    if (allScores.length) {
      // if allScores exists...
      const newScore = allScores.find((score) => score.id === Number(id));
      // create a variable and store the JSON Score that has the same ID as the ID given as parameter.
      const newShownComments = { ...shownComments };
      // create a variable that holds whatever is inside the shownComments object
      newShownComments[id] = newScore.comments;
      // newShownComments at the index of the param ID should be the comments found inside the score we found with an ID that matches the param ID.
      setShownComments(newShownComments);
    }
  };

  // const createComment = async (id) => {
  //   if (allScores.length) {
  //     const newComment = allComments.
  //   }
  // }

  return (
    <div className="scoreboard-container">
      {allScores.map((score) => (
        <React.Fragment key={score.id}>
          <div className="score-container">
            <h1>{score.score}</h1>
            {/* <h2>{score.id}</h2> */}
            <h5>{score.user.username}</h5>
            <h5>{score.created_at}</h5>
            {!shownComments[score.id] ? (
              <button onClick={() => fetchOneScore(score.id)}>Comments</button>
            ) : (
              <button onClick={() => setShownComments({})}>Hide</button>
            )}
            {shownComments[score.id] && <button onClick={}>Add Comment</button>}
          </div>
          {showCreate && (
            <div className="create-comment">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  createComment(formData);
                }}
              >
                <label>
                  <input
                    type="text"
                    name="content"
                    value={content}
                    onChange={handleChange}
                  />
                </label>
                <button>Submit</button>
              </form>
            </div>
          )}
          <div className={"comments"}>
            {shownComments[score.id] &&
              shownComments[score.id].map((comment) => (
                <React.Fragment key={comment.id}>
                  <div className="comment">
                    <h5>{comment.content}</h5>
                    <h5>{comment.user.username}</h5>
                  </div>
                </React.Fragment>
              ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Scores;
