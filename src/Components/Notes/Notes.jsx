import React from "react";
import { Outlet, useLoaderData, Link } from "react-router-dom";

// import NoteForm from "./NoteForm";
import BodyNotes from "./BodyNotes";

import { deleteNote, getNotes } from "../../RouteActions/Note";

export async function notesLoader() {
	return await getNotes();
}

export default function Notes() {
	const notes = useLoaderData();

	return (
		<>
			<div style={{ display: "flex", width: "100%" }}>
				<Link to="/notes/addNote" className="btn btn-primary">
					+
				</Link>
			</div>
			<div style={{ display: "flex" }}>
				<BodyNotes data={notes} deleteNote={deleteNote} />
				<Outlet />
			</div>
		</>
	);
}
