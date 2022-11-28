import "./App.css";
import React from "react";

import "./Styles/Button.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./Components/Root/Root";
import Landing from "./Components/Landing/Landing";
import Notes, { notesLoader } from "./Components/Notes/Notes";
import { formSaveAction, formUpdateAction } from "./Components/Notes/NoteForm";
import AddNote from "Components/Notes/AddNote";
import EditNote, { noteLoader } from "./Components/Notes/EditNote";
import ShowNote, { noteAction } from "./Components/Notes/ShowNote";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Root />,
			children: [
				{
					path: "",
					element: <Landing />,
				},
				{
					path: "notes",
					element: <Notes />,
					loader: notesLoader,
					children: [
						{
							path: "addNote",
							element: <AddNote />,
							action: formSaveAction,
						},
						{
							path: ":idNote",
							element: <ShowNote />,
							loader: noteLoader,
							action: noteAction,
						},
						{
							path: ":idNote/edit",
							element: <EditNote />,
							loader: noteLoader,
							action: formUpdateAction,
						},
					],
				},
			],
		},
	]);

	return (
		<div style={{ width: "100%" }}>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
