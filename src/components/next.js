import React, { Component } from 'react';
import { Button } from 'react-materialize';
import ErrorBoundary from './error-boundary';

class Next extends Component {

	constructor(props) {
        super(props);
        
        let id = parseInt(this.props.currentId, 10);
        let nextId = id + 1;
        
		this.state = {
            nextId: nextId,
            error: false,
            data: null,
		}
	}

	componentDidMount() {

		let {nextId} = this.state;

		fetch('http://localhost:1337/'+nextId)
		.then((res) => res.json())
		.then((json) => {

			if (json.error) {  
				// Api send 0 data
			} else {
                this.setState({
                    data: json,
                })
            }
		})
		.catch(err => {
			this.setState({
				error: true,
			});
		});
	}

	render() {

		const { data, nextId, error } = this.state;
		
		if (error) {
			return ( 
				<ErrorBoundary hasError={true} 
							   info={'Sorry we have some trouble! Retry again!'}/> 
			);
		}
		return !data ? (
                 <Button waves='light'
                         node='a' 
                         style={{float: 'right'}}
                         disabled={true}
                         >
                        Suivant
                </Button>
            ) : (
                <Button waves='light'
                            node='a' 
                            href={`/${nextId}`}
                            style={{float: 'right'}} 
                            >
                            Suivant
                </Button>
            );
	}

}

export default Next;
