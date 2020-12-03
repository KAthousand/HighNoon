import React from "react";
import "./Comment.css";
import { putComment, deleteComment } from "../../services/comments.js";

function Comment(props) {
  const { comment, currentUser } = props;
  return (
    <div className="comment">
      <h4>{comment.content}</h4>
      <h5>{comment.user.username}</h5>
      {currentUser.username === comment.user.username && (
        <>
          <button>Edit</button>
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
