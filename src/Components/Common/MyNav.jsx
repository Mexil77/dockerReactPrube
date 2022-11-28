import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import "./MyNav.scss";

export default function MyNav() {
	const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
	return (
		<nav className="navbar">
			<Link to={"/"} className="logoNav linesCenter">
				App Notes
			</Link>
			{isAuthenticated ? (
				<div id="userSection">
					<img src={user.picture} alt="" />
					<button
						className="logoNav linesCenter"
						onClick={() => {
							logout({ returnTo: window.location.origin });
						}}
					>
						LogOut
					</button>
				</div>
			) : (
				<button
					className="logoNav linesCenter"
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
