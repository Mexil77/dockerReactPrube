import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import "./MyNav.css";

export default function MyNav() {
	const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
	return (
		<nav className="navbar">
			<Link to={"/"} id={"logoNav"}>
				<p>App Notes</p>
			</Link>
			{isAuthenticated ? (
				<div id="userSection">
					<img src={user.picture} alt="" />
					<button
						className="btn"
						onClick={() => {
							logout({ returnTo: window.location.origin });
						}}
					>
						LogOut
					</button>
				</div>
			) : (
				<button
					className="btn"
					onClick={() => {
						loginWithRedirect();
					}}
				>
					Login
				</button>
			)}
		</nav>
	);
}
