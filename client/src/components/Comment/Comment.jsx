import React, { useState } from "react";
import "./Comment.css";
import { putComment, deleteComment } from "../../services/comments.js";
import EditComment from "../EditComment/EditComment";

function Comment(props) {
  const [showEdit, setShowEdit] = useState(false);
  const {
    scoreData,
    comment,
    currentUser,
    isSubmitting,
    setIsSubmitting,
  } = props;
  return (
    <div className="comment">
      {showEdit ? (
        <EditComment
          scoreData={scoreData}
          commentData={comment}
          isSubmitting={isSubmitting}
          setIsSubmitting={setIsSubmitting}
        />
      ) : (
        <>
          <h4>{comment.content}</h4>
          <h5>{comment.user.username}</h5>
        </>
      )}
      {currentUser.username === comment.user.username && (
        <>
          <button onClick={() => setShowEdit(!showEdit)}>Edit</button>
          <button
            onClick={(e) => {
              e.preventDefault();
              deleteComment(comment.id);
            }}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default Comment;
