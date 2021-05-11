import React from "react";
import { Link } from "react-router-dom";
import "./PostCard.css";

function PostCard({ post, match }) {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <div key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to={`/post/${post.id}`}>
        <button>More Details</button>
      </Link>
    </div>
  );
}

export default PostCard;
