import React from "react";
import { Outlet } from "react-router-dom";

function Posts() {
  return (
    <div>
      <h2>The Tech Blogs</h2>
      <Outlet />
    </div>
  );
}

export default Posts;
