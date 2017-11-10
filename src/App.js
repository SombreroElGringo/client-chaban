import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route, 
	Switch
} from 'react-router-dom';


import HomePage from './pages/home';
import SinglePage from './pages/single';
import ErrorPage from './pages/error';

class App extends Component {


	render() {
		return (
		<Router>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/:id" component={SinglePage} />
				<Route path="*" component={ErrorPage} />
			</Switch>
		</Router>
		);
	}
}

export default App;
