import React from "react";
import { useNavigate } from "react-router-dom";
function LoginPage() {
	const navigate = useNavigate();
	const handleChange = (e) => {
		let str = e.target.value;
		if (str === "SCALive") {
			navigate("/dashboard");
		}
	};
	return (
		<div>
			<h2>LoginPage</h2>
			<p>Enter the secret key to proceed</p>
			<input type="text" onChange={handleChange} />
		</div>
	);
}

export default LoginPage;
