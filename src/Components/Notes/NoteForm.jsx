import React from "react";
import { Form, redirect } from "react-router-dom";

import "./NoteForm.scss";

import { saveNote, updateNote } from "../../RouteActions/Note";

export async function formSaveAction({ request }) {
	const formData = await request.formData();
	await saveNote({
		title: formData.get("title"),
		body: formData.get("body"),
	});
	return redirect("/notes");
}

export async function formUpdateAction({ request, params }) {
	const formData = await request.formData();
	await updateNote({
		idNote: params.idNote,
		title: formData.get("title"),
		body: formData.get("body"),
	});
	return redirect("/notes");
}

export default function NoteForm({ id }) {
	return (
		<div className="NoteForm">
			<h3 className="NoteForm_title">{id ? "Edit" : "Add a"} Note</h3>
			<Form method="post" className="NoteForm_form">
				<input type="text" placeholder="Titulo" name="title" />
				<input type="text" placeholder="Descripcion" name="body" />
				<button type="submit" className="btn btn-primary">
					{id ? "Edit" : "Add"}
				</button>
			</Form>
		</div>
	);
}
