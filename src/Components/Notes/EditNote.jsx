import React from "react";
import { getNote } from "../../RouteActions/Note";
import { useLoaderData } from "react-router-dom";

import Card from "../Common/Card";
import NoteForm from "./NoteForm";

export default function EditNote() {
	const note = useLoaderData();
	const { userId, id, title, body } = note;
	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<NoteForm />
			<Card key={id} userId={userId} id={id} title={title} body={body} />
		</div>
	);
}

export async function noteLoader({ params }) {
	return await getNote(params.idNote);
}
