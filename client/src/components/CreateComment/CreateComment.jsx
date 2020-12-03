import React, { useState } from "react";
import { postComment } from "../../services/comments";
import "./CreateComment.css";

function CreateComment(props) {
  const { scoreData, isSubmitting, setIsSubmitting } = props;
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
            postComment(formData);
            setIsSubmitting(!isSubmitting);
          } catch (error) {
            console.error(error);
          }
          setIsSubmitting(!isSubmitting);
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
