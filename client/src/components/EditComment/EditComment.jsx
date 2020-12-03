import React, { useState } from "react";

function EditComment(props) {
  const { commentData, handleEditComment, setShowEdit } = props;
  const [formData, setFormData] = useState({
    content: commentData.content,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          try {
            handleEditComment(commentData.id, formData);
            setShowEdit(false);
          } catch (error) {
            console.error(error);
          }
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
