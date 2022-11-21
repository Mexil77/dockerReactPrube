import React from "react";
import { getNote, deleteNote } from "../../RouteActions/Note";
import { useLoaderData, Form, redirect } from "react-router-dom";

import Card from "../Common/Card";
// import NoteForm from "./NoteForm";

export async function noteLoader({ params }) {
	return await getNote(params.idNote);
}

export async function noteAction({ params }) {
	await deleteNote(params.idNote);
	return redirect("/notes");
}

export default function EditNote() {
	const note = useLoaderData();
	const { userId, _id, title, body } = note;
	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			{/* <NoteForm /> */}
			<Card key={_id} userId={userId} id={_id} title={title} body={body} />
			<Form method="delete">
				<button type="submit" className="btn btn-danger">
					Delete
				</button>
			</Form>
		</div>
	);
}
