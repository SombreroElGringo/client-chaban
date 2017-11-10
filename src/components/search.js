import React, { Component } from 'react';
import { Input } from 'react-materialize';
import moment from 'moment';

class Search extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            dateFrom: null,
            dateTo: null,
        }
    }

    handleChange = (e) => {
        
        this.setState({
            [e.target.name]: e.target.value,
        }, () => {

            let dates = {
                from: this.state.dateFrom,
                to: this.state.dateTo,
            }

            this.props.onInputChange(dates); 
        }); 
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'space-between', width: 400, margin: '0 auto'}}>
                <div>
                    Du <Input placeholder="Entrer une date"
                              name="dateFrom"
                              error={moment(this.state.dateFrom, 'DD-MM-YY', true) ? null : 'Enter a valid date'} 
                              onChange={this.handleChange}/>
                </div>
                <div>
                    au <Input placeholder="DD-MM-YY" 
                              name="dateTo"
                              error={moment(this.state.dateTo, 'DD-MM-YY', true) ? null : 'Enter a valid date'}
                              onChange={this.handleChange}/>
                </div>
            </div>
        );
    }
}

export default Search;
