import React, { Component } from 'react';
import ErrorBoundary from './../components/error-boundary';

class Error extends Component {

	render () {
		const info = 'Not Found';
		return (
			<ErrorBoundary hasError={true} 
							   info={info}/> 
		)
	}
}

export default Error;