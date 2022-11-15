import React, { useState, useEffect } from "react";
import { Outlet, useLoaderData } from "react-router-dom";

import NoteForm from "./NoteForm";
import NoteFilter from "./NoteFilter";
import BodyNotes from "./BodyNotes";

import { deleteNote, getNotes } from "../../RouteActions/Note";

export async function notesLoader() {
	return await getNotes();
}

export async function notesAction() {
	return await deleteNote();
}

export default function Notes() {
	const notes = useLoaderData();
	const [user, setUser] = useState(1);
	const [data, setData] = useState([]);

	useEffect(() => {
		setData(notes);
	}, [notes]);
	return (
		<>
			<div style={{ display: "flex", width: "100%" }}>
				<NoteForm data={data} setData={setData} />
				<NoteFilter userNote={user} setUser={setUser} />
			</div>
			<div style={{ display: "flex" }}>
				<BodyNotes data={data} user={user} deleteNote={deleteNote} />
				<Outlet />
			</div>
		</>
	);
}
