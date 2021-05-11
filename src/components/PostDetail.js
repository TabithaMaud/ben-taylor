import React, { useEffect, useState } from "react";
import "./PostDetail.css";
import Comment from "./Comment";

function PostDetail({ match }) {
  const [postDetail, setPostDetail] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
      .then((res) => res.json())
      .then((res) => setPostDetail(res));

    fetch(
      `https://jsonplaceholder.typicode.com/posts/${match.params.id}/comments`
    )
      .then((res) => res.json())
      .then((res) => setComments(res));
  }, []);

  return (
    <div className="detail">
      <h2> {postDetail.title}</h2>
      <p>{postDetail.body}</p>
      <div className="comments">
        <h3>Comments</h3>
        <ul>
          {comments.map((comment) => {
            return <Comment comment={comment} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default PostDetail;
