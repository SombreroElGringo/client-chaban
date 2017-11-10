import React, { Component } from 'react';
import { Card } from 'react-materialize';

class Article extends Component {
    
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
                <div>{item.totale ? 'Fermeture totale' : 'Une voie de fermée'}</div>
                <div>{item.reason}</div>
                <div>
                    <a href={item.link} 
                       target='_blank'>Information complémentaire</a>
                </div>
            </div>
            </div>
        </Card>
        );
    }
}

export default Article;
