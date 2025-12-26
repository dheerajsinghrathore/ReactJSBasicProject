import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Protected(props) {
	let { result, children } = props;
	console.log("result", result);
	if (!result) {
		return <Navigate to="/" />;
	}
	return children;
}

export default Protected;
