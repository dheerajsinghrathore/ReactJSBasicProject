import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import Profile from "./components/Profile";
import Account from "./components/Account";
import NotFound from "./components/NotFound";
import "./App.css";

function App() {
	return (
		<div>
			<nav style={{ margin: 10 }}>
				<Link to="/" style={{ padding: 5, textDecoration: "none" }}>
					Home
				</Link>
				<Link to="/user" style={{ padding: 5, textDecoration: "none" }}>
					User
				</Link>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/user" element={<User username="Sachin" />}>
					<Route index element={<Profile />} />
					<Route path="profile" element={<Profile />} />
					<Route path="account" element={<Account />} />
				</Route>

				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
