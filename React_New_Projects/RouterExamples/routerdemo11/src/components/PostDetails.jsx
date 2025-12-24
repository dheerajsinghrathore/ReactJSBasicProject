import React from "react";
import { useParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

function PostDetails(props) {
  let { posts } = props;

  const { postId } = useParams();
  let postObj = posts.find((post) => post.id === parseInt(postId));

  if (!postObj) {
    return (
      <div>
        <h3>Post not found with id {postId}!</h3>
      </div>
    );
  }
  return (
    <div>
      <p>
        <strong>Post ID:</strong> {postObj.id}
      </p>
      <p>Title: {postObj.title}</p>
      <p>Description: {postObj.description}</p>
    </div>
  );
}

export default PostDetails;
