import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome To Dashboard</p>
      <p>
        You visited the Login Page at <b>{location.state.loginTime}</b>
      </p>
      <button onclick={handleClick}>Go Back</button>
    </div>
  );
}

export default Dashboard;
