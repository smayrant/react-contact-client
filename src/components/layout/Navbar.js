import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<div class="nav-wrapper container">
				<Link className="logo" to="/">
					SayWhat?!
				</Link>
				<ul id="nav-mobile" class="right hide-on-med-and-down">
					<li>
						<Link className="nav-link" to="/register">
							Register
						</Link>
					</li>
					<li>
						<Link className="nav-link" to="/login">
							Login
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
