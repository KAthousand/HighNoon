import React, { useState } from "react";
import "./Scores.css";

function Scores(props) {
  const { allScores, createComment } = props;
  const [showComments, setShowComments] = useState(false);
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

  return (
    <div className="scoreboard-container">
      {allScores.map((score) => (
        <React.Fragment key={score.id}>
          <div className="score-container">
            <h1>{score.score}</h1>
            <h2>{score.user.username}</h2>
            <h2>{score.created_at}</h2>
            <button onClick={() => setShowCreate(!showCreate)}>
              Add Comment
            </button>
            <button onClick={() => setShowComments(!showComments)}>
              Comments
            </button>
          </div>
          <div className={showCreate ? "create-comment" : "hidden"}>
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
          <div className={showComments ? "comments" : "hidden"}>
            {score.comments.map((comment) => (
              <React.Fragment key={comment.id}>
                <h3>{comment.content}</h3>
                <h3>{comment.user.username}</h3>
              </React.Fragment>
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Scores;
