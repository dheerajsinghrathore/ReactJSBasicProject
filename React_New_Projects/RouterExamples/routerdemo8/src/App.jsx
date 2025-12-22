import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import NotFound from "./components/NotFound";
import "./App.css";
import ContactDetails from "./components/ContactDetails";
import Contact from "./components/Contact";
import About from "./components/User";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <nav style={{ margin: 10 }}>
        <Link to="/">Home</Link> | <Link to="/user">User</Link> |{" "}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact-details" element={<ContactDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
