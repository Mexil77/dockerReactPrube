import React from "react";
import { Link } from "react-router-dom";

import "./MyNav.scss";

export default function MyNav() {
	return (
		<nav className="navbar">
			<Link to={"/"} className="logoNav linesCenter">
				App Notes
			</Link>
			<button className="logoNav linesCenter">Login</button>
		</nav>
	);
}
