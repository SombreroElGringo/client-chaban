import React, { Component } from 'react';
import { Button } from 'react-materialize';
import ErrorBoundary from './error-boundary';

class Next extends Component {

	constructor(props) {
        super(props);
        
        let id = parseInt(this.props.currentId, 10);
        let previousId = id > 1 ? id - 1 :  1; // Can't have a id equal at 0, so it's fixed at 0
        
		this.state = {
            currentId: id,
            previousId: previousId,
            error: false,
		}
	}

	componentDidMount() {

		let {previousId} = this.state;

		fetch('http://localhost:1337/'+previousId)
		.then((res) => res.json())
		.then((json) => {

			if (json.error) {  
				this.setState({
					error: true,
				});
			}
		})
		.catch(err => {
			this.setState({
				error: true,
			});
		});
	}

	render() {

        const { currentId, previousId, error } = this.state;
        
		if (error) {
			return ( 
				<ErrorBoundary hasError={true} 
							   info={'Sorry we have some trouble! Retry again!'}/> 
			);
		}
		return (
			<Button waves='light'
                        node='a' 
                        href={`/${previousId}`}
                        style={{float: 'right'}}
                        disabled={currentId === 1 ? true : false} 
                        >
                        Précédent
            </Button>
		);
	}

}

export default Next;
