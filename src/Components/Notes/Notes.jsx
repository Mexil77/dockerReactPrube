import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";

import "./Notes.scss";

import BodyNotes from "./BodyNotes";

import { deleteNote, getNotes } from "../../RouteActions/Note";

export async function notesLoader() {
	return await getNotes();
}

export default function Notes() {
	const notes = useLoaderData();

	return (
		<div className="Notes">
			<BodyNotes data={notes} deleteNote={deleteNote} />
			<Outlet />
		</div>
	);
}
