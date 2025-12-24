import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import "./App.css";
import Posts from "./components/Posts";
import PostList from "./components/PostList";
import PostDetails from "./components/PostDetails";

function App() {
  const blogPosts = [
    {
      id: 101,
      title: "React Router v6",
      description: "A comprehensive guide to React Router v6",
    },
    {
      id: 102,
      title: "React Hooks",
      description: "Understanding React Hooks and their usage",
    },
    {
      id: 103,
      title: "Nested Routing",
      description: "Implementing nested routing in React applications",
    },
  ];

  return (
    <div>
      <nav style={{ margin: 10 }}>
        <NavLink to="/" style={{ padding: 5, textDecoration: "none" }}>
          Home
        </NavLink>
        <NavLink to="/about" style={{ padding: 5, textDecoration: "none" }}>
          About
        </NavLink>
        <NavLink to="/posts" style={{ padding: 5, textDecoration: "none" }}>
          Posts
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/posts" element={<Posts />}>
          <Route index element={<PostList posts={blogPosts} />} />
          <Route path=":postId" element={<PostDetails posts={blogPosts} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
