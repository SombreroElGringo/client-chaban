import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-materialize';

import { Link } from 'react-router-dom';

class ListItem extends Component {

	static propTypes = {
		item: PropTypes.shape({
			date: PropTypes.string.isRequired,
		}).isRequired,
	}

	render() {
		const { item } = this.props;

		return (
			<Card>
				<div style={{display: 'flex', justifyContent: 'space-between', width: 400, margin: '0 auto'}}>

					<img style={{height:100, width:100}} 
						src={item.reason === 'MAINTENANCE' ? './worker.png' : './ship.png'}
						alt='icone'/>

					<div>
						<h4>{item.date}</h4>
						<div>de {item.start} à {item.end}</div>
						
						<Link to={`/${item.id}`}>
						Voir plus de détails
						</Link>
					</div>
				</div>
			</Card>
		);
	}

}

export default ListItem;
