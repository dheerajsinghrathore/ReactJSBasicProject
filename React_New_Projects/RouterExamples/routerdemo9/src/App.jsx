import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import NotFound from "./components/NotFound";
import "./App.css";
import ContactDetails from "./components/ContactDetails";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div>
      <nav style={{ margin: 10 }}>
        <NavLink to="/">Home</NavLink> | <NavLink to="/about">About</NavLink> |{" "}
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact-details" element={<ContactDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
