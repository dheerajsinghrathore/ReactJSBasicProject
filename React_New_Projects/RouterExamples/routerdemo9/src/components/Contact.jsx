import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to the Contact Page</h1>
      <p>This is the main landing page of the application.</p>

      <button onClick={() => navigate("/contact-details")}>
        View Contact Details
      </button>
    </div>
  );
}

export default Contact;
