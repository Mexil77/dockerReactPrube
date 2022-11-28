import React from "react";

import { Link } from "react-router-dom";

import "./Card.scss";

export default function Card({ id, title, body }) {
	return (
		<Link to={`/notes/${id}`} style={{ textDecoration: "none" }}>
			<div className="noteCard">
				<h3 style={{ margin: 0 }}>{title}</h3>
				<p>{body}</p>
			</div>
		</Link>
	);
}
