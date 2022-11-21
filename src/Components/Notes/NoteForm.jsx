import React from "react";
import { Form, redirect } from "react-router-dom";

import { saveNote } from "../../RouteActions/Note";

export async function notesAction({ request }) {
	const formData = await request.formData();
	console.log(formData);
	await saveNote({
		title: formData.get("title"),
		body: formData.get("body"),
	});
	return redirect("/notes");
}

export default function NoteForm() {
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
				<button type="submit">Add</button>
			</Form>
		</div>
	);
}
