import React from "react";

const Login = () => {
	return (
		<div className="row">
			<form className="login-form col s12">
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
				<button class="waves-effect waves-light btn">Login</button>
			</form>
		</div>
	);
};

export default Login;
