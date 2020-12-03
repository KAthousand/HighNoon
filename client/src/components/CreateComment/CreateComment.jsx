import React, { useState } from "react";
import { postComment } from "../../services/comments";
import "./CreateComment.css";

function CreateComment(props) {
  const { scoreData, setIsSubmitting } = props;
  const [formData, setFormData] = useState({
    content: "",
    score: [scoreData.id],
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
            setIsSubmitting(true);
            postComment(formData);
          } catch (error) {
            console.error(error);
          }
          setIsSubmitting(false);
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
