import React from "react";
import { useNavigate } from "react-router-dom";
function Dashboard() {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(-1);
	};
	return (
		<div>
			<h2>Dashboard</h2>
			<p>Welcome To Dashboard</p>
			<button onclick={handleClick}>Go Back</button>
		</div>
	);
}

export default Dashboard;
