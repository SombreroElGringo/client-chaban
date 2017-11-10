import React, { Component } from 'react';
import Article from './../components/article';
import { Route, Link, Redirect } from 'react-router-dom';
import { ProgressBar, Button } from 'react-materialize';
import ErrorBoundary from './../components/error-boundary';
import Next from './../components/next';
import Previous from './../components/previous';

class SinglePage extends Component {

	constructor(props) {
		super(props);

		this.state = {
			data: null,
			error: false,
			info: null,
		}
	}

	componentDidMount() {
		let {id} = this.props.match.params;

		fetch('http://localhost:1337/'+id)
		.then((res) => res.json())
		.then((json) => {

			if (json.error) {  
				this.setState({
					error: true,
					info: 'Not Found!',
				});
			} else {
				this.setState({
					data: json,
				});
			}
		})
		.catch(err => {
			this.setState({
				error: true,
				info: `Parsing Failed: ${err}`,
			});
		});
	}

	render() {

		const { data, error, info } = this.state;
		let {id} = this.props.match.params;
		
		if (error) {
			return ( 
				<ErrorBoundary hasError={true} 
							   info={info}/> 
			);
		}
		return (
			<div>
				{!data ? (
					<ProgressBar />
				) : (
				<div>
					<Button waves='light'
							node='a' 
							href='/'>
							Acceuil
					</Button>

					<Next currentId={id}/>
					<Previous currentId={id}/>

					<Article 
					item={data}
					/>
				</div>
				)}
			</div>
		);
	}

}

export default SinglePage;
