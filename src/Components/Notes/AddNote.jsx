import React from "react";
import NoteForm from "./NoteForm";

import "./AddNote.scss";
import HeaderXButton from "Components/Common/HeaderXButton";

export default function AddNote() {
	return (
		<div className="AddNote">
			<HeaderXButton />
			<NoteForm />
		</div>
	);
}
