import "./App.css";
import React from "react";

import "./Styles/Button.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./Components/Root/Root";
import Landing from "./Components/Landing/Landing";
import Notes, { notesLoader, notesAction } from "./Components/Notes/Notes";
import EditNote, { noteLoader } from "./Components/Notes/EditNote";

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
					action: notesAction,
					children: [
						{
							path: ":idNote",
							element: <EditNote />,
							loader: noteLoader,
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
