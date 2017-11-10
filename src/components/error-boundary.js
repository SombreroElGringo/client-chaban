import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
		super(props);
		
		this.state = { 
			hasError: this.props.hasError, 
			info: this.props.info,
		};
	}
  
    componentDidCatch(error, info) {
		this.setState({ 
			hasError: true,
			info: info,
		});
	}

	_goBack() {
		return window.history.back();
	}

    render() {

		if (this.state.hasError) {

			const { info } = this.state;
			const  status  =  404;

			return (
				<div style={{textAlign : 'center'}}>
					<img
					src={`https://http.cat/${status}`}
					alt="error"
					title={`${info}`}
					onClick={this._goBack} />
				</div>
			);
		}
		return this.props.children;
    }
}


export default ErrorBoundary;