import React from "react";
import { Routes, Route } from "react-router-dom";

import NotFound from "./components/NotFound";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
