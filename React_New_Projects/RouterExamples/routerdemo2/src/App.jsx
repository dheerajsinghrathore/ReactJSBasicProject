import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

// Linking the pages using Routes and Route
function App() {
  return (
    <div>
      <nav style={{ margin: 10 }}>
        <NavLink to="/" style={{ padding: 5, textDecoration: "none" }}>
          Home
        </NavLink>{" "}
        |{" "}
        <NavLink to="/about" style={{ padding: 5, textDecoration: "none" }}>
          About
        </NavLink>{" "}
        |{" "}
        <NavLink to="/contact" style={{ padding: 5, textDecoration: "none" }}>
          Contact
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
