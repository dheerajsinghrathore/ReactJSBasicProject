import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "./postSlice";
export default function Post() {
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div>
      <h2>List Of Posts</h2>
      {post.loading && <div> Loading....</div>}
      {!post.loading && post.error ? <div>Error:{post.error}</div> : null}
      {!post.loading && post.posts.length > 0 ? (
        <ul>
          {post.posts.map((postObj) => {
            return (
              <li key={postObj.id}>
                id:{postObj.id}
                <br />
                title:{postObj.title}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
