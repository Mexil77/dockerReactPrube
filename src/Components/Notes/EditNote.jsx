import React from "react";
import { getNote } from "../../RouteActions/Note";
import { useLoaderData } from "react-router-dom";

import Card from "../Common/Card";
import NoteForm from "./NoteForm";
import HeaderXButton from "Components/Common/HeaderXButton";

export async function noteLoader({ params }) {
	return await getNote(params.idNote);
}

export default function EditNote() {
	const note = useLoaderData();
	const { _id, title, body } = note;
	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<HeaderXButton />
			<NoteForm id={_id} />
			<Card key={_id} id={_id} title={title} body={body} />
		</div>
	);
}
