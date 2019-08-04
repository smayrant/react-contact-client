import React, { createContext, Component } from "react";

export const AuthContext = createContext();

class AuthContextProvider extends Component {
	state = {
		token: "",
		isAuthenticated: null,
		loading: true,
		user: null,
		error: null
	};
	render () {
		return <AuthContext.Provider value={{ ...this.state }}>{this.props.children}</AuthContext.Provider>;
	}
}

export default AuthContextProvider;
