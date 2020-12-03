import React, { useState } from "react";
import { putComment } from "../../services/comments";

function EditComment(props) {
  const { scoreData, commentData, isSubmitting, setIsSubmitting } = props;
  const [formData, setFormData] = useState({
    content: "",
    // score_id: String(scoreData.id),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdate = async (id, formData) => {
    await putComment(id, formData);
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          try {
            handleUpdate(commentData.id, formData);
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
            placeholder="Comment"
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

export default EditComment;
