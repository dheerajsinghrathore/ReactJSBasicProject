import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Protected from "./components/Protected";
import Profile from "./components/Profile";
import About from "./components/About";

import NotFound from "./components/NotFound";
import "./App.css";
import NavBar from "./components/NavBar";
import { useState } from "react";

function App() {
  const [result, setResult] = useState(false);
  const handleLogin = (e) => {
    setResult(true);
  };
  const handleLogout = (e) => {
    setResult(false);
  };
  return (
    <div>
      <NavBar />
      {!result ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/profile"
          element={
            <Protected result={result}>
              <Profile />
            </Protected>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
