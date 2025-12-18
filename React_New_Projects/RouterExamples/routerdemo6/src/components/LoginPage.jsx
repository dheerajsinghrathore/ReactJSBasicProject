import React from "react";
import { useNavigate } from "react-router-dom";
function LoginPage() {
	const navigate = useNavigate();
	const handleChange = (e) => {
		let str = e.target.value;
		if (str === "SCALive") {
			const today = new Date();
			let dateStr = `${today.toDateString()}@${today.toLocaleTimeString()}`;
			navigate("/dashboard", { state: { loginTime: dateStr } });
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
