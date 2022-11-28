import React from "react";
import { Link } from "react-router-dom";
import { MdNoteAdd } from "react-icons/md";

import Card from "../Common/Card";

import "./BodyNotes.scss";

export default function BodyNotes({ data }) {
	return (
		<div className="bodyNotes">
			<Link
				to="/notes/addNote"
				className="btn btn-primary bodyNotes_addNoteLink"
			>
				<MdNoteAdd />
			</Link>
			<div className="bodyNotes_Notes">
				{data.map((d) => {
					return <Card key={d._id} id={d._id} title={d.title} body={d.body} />;
				})}
			</div>
		</div>
	);
}
