import React from "react";
import { Link, Outlet } from "react-router-dom";

function User(props) {
  return (
    <div>
      <h2>User:{props.username}</h2>
      <nav>
        <Link to="/user/profile" style={{ padding: 5, textDecoration: "none" }}>
          Profile
        </Link>
        <Link to="/user/account" style={{ padding: 5, textDecoration: "none" }}>
          Account
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default User;
