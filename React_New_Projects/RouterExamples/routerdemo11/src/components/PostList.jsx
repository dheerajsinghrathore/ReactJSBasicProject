import React from "react";

function PostList({ posts }) {
  let blogPosts = posts;

  return (
    <div>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
