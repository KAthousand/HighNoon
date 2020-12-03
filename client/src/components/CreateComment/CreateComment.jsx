import React, { useState } from "react";
// import { postComment } from "../../services/comments";
import "./CreateComment.css";

function CreateComment(props) {
  const { scoreData, handleCreateComment } = props;
  const [formData, setFormData] = useState({
    content: "",
    score_id: String(scoreData.id),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="create-comment">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          try {
            handleCreateComment(formData);
            setFormData((prevState) => ({
              ...prevState,
              content: "",
              score_id: String(scoreData.id),
            }));
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <label>
          <input
            type="text"
            name="content"
            value={formData.content}
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default CreateComment;
