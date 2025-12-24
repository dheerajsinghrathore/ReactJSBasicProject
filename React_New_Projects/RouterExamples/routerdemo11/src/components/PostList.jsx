import React from "react";
import { Link } from "react-router-dom";

function PostList({ posts }) {
  let blogPosts = posts;

  return (
    <div>
      <ul>
        {blogPosts.map((post) => {
          return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>;
        })}
      </ul>
    </div>
  );
}

export default PostList;
