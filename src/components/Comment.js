import React from "react";
import "./Comment.css";

function Comment({ comment }) {
  return (
    <li>
      <h4>comment.name}</h4>
      <p>By: {comment.email}</p>
      <p>{comment.body}</p>
    </li>
  );
}

export default Comment;
