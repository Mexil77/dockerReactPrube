import React from "react";

import Card from "../Common/Card";

export default function BodyNotes({ data }) {
	return (
		<div
			style={{
				backgroundColor: "#30af99",
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "center",
			}}
		>
			{data.map((d) => {
				return (
					<Card
						key={d._id}
						id={d._id}
						userId={d.userId}
						title={d.title}
						body={d.body}
					/>
				);
			})}
		</div>
	);
}
