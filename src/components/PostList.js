import React from "react";
import PostCard from "./PostCard";
import "./PostList.css";

function PostList({ posts }) {
  return (
    <section>
      {posts.map((post) => {
        return <PostCard post={post} />;
      })}
    </section>
  );
}

export default PostList;
