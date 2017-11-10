import React, { Component } from 'react';
import List from './../components/list';
import Search from './../components/search';
import { ProgressBar } from 'react-materialize';
import moment from 'moment';
import 'moment/locale/fr';


class HomePage extends Component {

	constructor(props) {
		super(props);

		this.state = {
		data: null,
		}
	}

	componentDidMount() {

		fetch('http://localhost:1337')
			.then((res) => res.json())
			.then((json) => {
				this.setState({
				data: json,
				});
			});
	}

	handleInputChange = (dates) => {
		moment.locale('fr'); //Sometimes work, but throw -> Deprecation warning: value provided is not in a recognized
		console.log(dates)
		let query = '';
		let _from = dates.from;
		let _to = dates.to;

		query = this._getQuery(_from, _to);

		fetch('http://localhost:1337'+query)
		.then((res) => res.json())
		.then((json) => {
			this.setState({
				data: json,
			});
		});
	}

	_getQuery = (_from, _to) => {
		let query = '';

		if ( (moment(_from, 'DD-MM-YY').isValid() && !_to ) || ( !_from && moment(_to, 'DD-MM-YY').isValid()) || (moment(_from, 'DD-MM-YY').isValid() && moment(_to, 'DD-MM-YY').isValid()) ) {
			
			if (!_to || (_from && _to)) {
				query = `?from=${_from}`;
				query += moment(_from).isSame(_to) ? `&to=${_to}` : moment(_to).isAfter(_from) ? `&to=${_to}` : '';
			} else if (_to) {
				query = `?to=${_to}`;
			}
		}
		return query;
	}

	render() {

		const { data } = this.state;

		return (
		<div>

			<h1 className='title'>Pont Chalban Delmas</h1>



			{!data ? (
			<ProgressBar />
			) : (
			<div>
				<Search onInputChange={this.handleInputChange}/>
				{data.length > 0 ?
					(<List className='pcd-list' data={data} />) :
					(<p style={{textAlign: 'center'}}>Aucune données pour ces dates!</p>)
				}
			</div>
			)}
		</div>
		);
	}

}

export default HomePage;
