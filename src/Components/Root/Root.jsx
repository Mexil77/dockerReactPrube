import React from "react";
import { Outlet } from "react-router-dom";
import MyNav from "../Common/MyNav";

export default function Root() {
	return (
		<div>
			<MyNav />
			<Outlet />
		</div>
	);
}
