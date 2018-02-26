import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

import { Form, Input, Icon, Button } from 'semantic-ui-react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: ''};
        this.onInputChange = this.onInputChange.bind(this);// new practice is to use fat arrow function in onChange{(event) => this.onInputChange(event)} if babel is included
    }

    onInputChange(event) {
        this.setState({ term: event.target.value});
    }

    handleSubmit(event) {
        this.props.fetchWeather(this.state.term);
        this.setState({ term: ''});
    }

    render() {
        return (
            <div>
                <Form>
                    <Input
                        value={this.state.term}
                        onChange={this.onInputChange}
                        icon='sun'
                        placeholder='Get a five day forecast in yoru favorite cities...' />
                    <Button
                        onClick={event => this.handleSubmit(event)}
                        primary
                        type='submit'
                    >
                        Search    
                    </Button> 
                </Form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);// passing null because this component doesn't care about state, instead it's passing a function