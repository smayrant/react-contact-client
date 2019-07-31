import React from "react";

const Navbar = () => {
	return (
		<nav>
			<div className="container nav-inner-container">
				<div className="logo-container">logo</div>
				<div className="right-container">
					<ul className="nav-link-container">
						<li className="nav-link">home</li>
						<li className="nav-link">register</li>
						<li className="nav-link">sign in</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
