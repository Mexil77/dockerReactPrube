import React from "react";

import { Link } from "react-router-dom";

import "./Card.css";

export default function Card({ id, userId, title, body }) {
	return (
		<Link to={`/notes/${id}`} style={{ textDecoration: "none" }}>
			<div className="noteCard">
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<p style={{ margin: 0 }}>#{id}</p>
					<h2 style={{ margin: 0 }}>idUser: {userId}</h2>
				</div>
				<h3 style={{ margin: 0 }}>{title}</h3>
				<p>{body}</p>
			</div>
		</Link>
	);
}
