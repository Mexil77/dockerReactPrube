import React from "react";
import { Form, redirect } from "react-router-dom";

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
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				width: "50%",
				backgroundColor: "#afafaf",
				alignItems: "center",
			}}
		>
			<h3 style={{ margin: 0 }}>Ingresa una Nota</h3>
			<Form
				method="post"
				style={{ display: "flex", flexDirection: "column", width: "50%" }}
			>
				<input type="text" placeholder="Titulo" name="title" />
				<input type="text" placeholder="Descripcion" name="body" />
				<button type="submit">{id ? "Edit" : "Add"}</button>
			</Form>
		</div>
	);
}
