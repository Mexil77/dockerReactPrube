import React from "react";

import { Link } from "react-router-dom";

import "./Card.css";

export default function Card(props) {
	return (
		<div className="noteCard">
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<h2 style={{ margin: 0 }}>#{props.id}</h2>
				<h2 style={{ margin: 0 }}>idUser: {props.userId}</h2>
			</div>
			<h3 style={{ margin: 0 }}>{props.title}</h3>
			<p>{props.body}</p>
			<Link to={`/notes/${props.id}`} style={{ textDecoration: "none" }}>
				<button className="btn btn-primary">edit</button>
			</Link>
			<button
				className="btn btn-danger"
				onClick={() => {
					props.deleteNote(props.id);
				}}
			>
				delete
			</button>
		</div>
	);
}
