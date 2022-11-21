import React from "react";
import { deleteNote } from "../../RouteActions/Note";
import { useLoaderData, Form, redirect, Link } from "react-router-dom";

import Card from "../Common/Card";

export async function noteAction({ params }) {
	await deleteNote(params.idNote);
	return redirect("/notes");
}

export default function ShowNote() {
	const note = useLoaderData();
	const { userId, _id, title, body } = note;
	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<Card key={_id} userId={userId} id={_id} title={title} body={body} />
			<Form method="delete">
				<button type="submit" className="btn btn-danger">
					Delete
				</button>
			</Form>
			<Link to={`/notes/${_id}/edit`}>
				<button type="submit" className="btn btn-primary">
					Edit
				</button>
			</Link>
		</div>
	);
}
