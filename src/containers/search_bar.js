import React, { Component } from 'react';
import { Form, Input, Icon, Button } from 'semantic-ui-react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: ''};
        this.onInputChange = this.onInputChange.bind(this);// new practice is to use fat arrow function in onChange{(event) => this.onInputChange(event)} if babel is included
    }

    onInputChange(event) {
        this.setState({ term: event.target.value});
    }

    handleSubmit(event) {

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
                        onClick={(event) => this.handleSubmit(event)}
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