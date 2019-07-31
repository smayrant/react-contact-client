import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Start from "./components/pages/Start";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import "./main.scss";

function App () {
	return (
		<Router className="App">
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/start" component={Start} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Register} />
			</Switch>
		</Router>
	);
}

export default App;
