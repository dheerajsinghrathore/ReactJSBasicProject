import React from "react";
import { useNavigate } from "react-router-dom";

function ContactDetails() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Contact Details</h2>
      <p>Email:rathored070@gmail.com</p>
      <p>Phone: +91 7025022226</p>

      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={() => navigate('/')}>Go Home</button>
    </div>
  );
}

export default ContactDetails;
