import React from "react";

import Card from "../Common/Card";

export default function BodyNotes({ data, user, deleteNote }) {
	return (
		<div
			style={{
				backgroundColor: "#30af99",
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "center",
			}}
		>
			{data
				.filter((d) => d.userId === user)
				.map((d) => {
					return (
						<Card
							key={d.id}
							id={d.id}
							userId={d.userId}
							title={d.title}
							body={d.body}
							deleteNote={deleteNote}
						/>
					);
				})}
		</div>
	);
}