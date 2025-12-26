import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
	return (
		<nav style={{ margin: 10 }}>
			<Link style={{ padding: "10px" }} to="/">
				Home
			</Link>
			<Link style={{ padding: "10px" }} to="/profile">
				Profile
			</Link>
			<Link style={{ padding: "10px" }} to="/about">
				About
			</Link>
		</nav>
	);
}

export default NavBar;
