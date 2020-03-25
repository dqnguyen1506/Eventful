import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MapComponent from './MapComponent';
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";

const routing = (
	<Router>
		<div id="routing-container">
			<Redirect exact from="/" to="/maps" />
			<Route path="/maps" component={MapComponent}></Route>
		</div>
	</Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
