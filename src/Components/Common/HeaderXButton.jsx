import React from "react";
import { Link } from "react-router-dom";
import { BsFillXCircleFill } from "react-icons/bs";

import "./HeaderXButton.scss";

export default function HeaderXButton() {
	return (
		<Link to="/notes" className="btn btn-danger btn-cross crossbutton">
			<BsFillXCircleFill />
		</Link>
	);
}
