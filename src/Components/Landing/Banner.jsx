import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import "./Banner.scss";

export default function Banner() {
	const { isAuthenticated, user } = useAuth0();

	return (
		<section>
			<div className="Banner">
				<div className="Banner_Box">
					<h1>Bienvenido {isAuthenticated && user.given_name}</h1>
					<p>Tu app para gestionar todas tus notas</p>
					{isAuthenticated && (
						<Link to={"/notes"} className="btn btn-banner">
							Ir a notas
						</Link>
					)}
				</div>
			</div>
		</section>
	);
}
