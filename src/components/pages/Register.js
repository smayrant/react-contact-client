import React from "react";

const Register = () => {
	return (
		<div className="main-container row">
			<div className="form-container">
				<form className="register-form col s12">
					<h1 className="form-name-logo">SayWhat?!</h1>
					<div className="row">
						<div className="input-field col s12">
							<input id="name" type="text" className="validate" />
							<label for="username">Username</label>
						</div>
					</div>

					<div className="row">
						<div className="input-field col s12">
							<input id="email" type="email" className="validate" />
							<label for="email">Email</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input id="password" type="password" className="validate" />
							<label for="password">Password</label>
						</div>
					</div>
					<button class="login-register-btn waves-effect waves-light btn">Register</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
