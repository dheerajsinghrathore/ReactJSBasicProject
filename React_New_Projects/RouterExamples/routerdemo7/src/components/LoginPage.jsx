import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function LoginPage() {
	let [dateStr, setDateStr] = useState("");
	const navigate = useNavigate();
	const handleChange = (e) => {
		let str = e.target.value;
		if (str === "SCALive") {
			navigate("/dashboard", { state: { loginTime: dateStr } });
		}
	};
	useEffect(() => {
		const today = new Date();
		setDateStr(`${today.toDateString()}@${today.toLocaleTimeString()}`);
	}, []);
	return (
		<div>
			<h2>LoginPage</h2>
			<p>Enter the secret key to proceed</p>
			<input type="text" onChange={handleChange} />
		</div>
	);
}

export default LoginPage;
