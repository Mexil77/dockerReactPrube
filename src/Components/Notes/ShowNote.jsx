import React from "react";
import { deleteNote } from "../../RouteActions/Note";
import { useLoaderData, Form, redirect, Link } from "react-router-dom";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

import Card from "../Common/Card";

import "./ShowNote.scss";
import HeaderXButton from "Components/Common/HeaderXButton";

export async function noteAction({ params }) {
	await deleteNote(params.idNote);
	return redirect("/notes");
}

export default function ShowNote() {
	const note = useLoaderData();
	const { _id, title, body } = note;
	return (
		<div className="ShowNote">
			<HeaderXButton />
			<Card key={_id} id={_id} title={title} body={body} />
			<div className="ShowNote_buttons">
				<Link
					to={`/notes/${_id}/edit`}
					className="btn btn-primary ShowNote_buttons_button"
				>
					<AiFillEdit />
				</Link>
				<Form
					method="delete"
					className="ShowNote_buttons_form ShowNote_buttons_button"
				>
					<button type="submit" className="btn btn-danger">
						<AiFillDelete />
					</button>
				</Form>
			</div>
		</div>
	);
}
