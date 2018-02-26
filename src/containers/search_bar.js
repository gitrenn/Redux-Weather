import React, { Component } from 'react';
import { Form, Input, Icon, Button } from 'semantic-ui-react';

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <Form>
                    <Input
                        icon='sun'
                        placeholder='Search the city...' />
                    <Button
                        type='submit'
                    >
                        Search    
                    </Button> 
                </Form>
            </div>
        )
    }
}