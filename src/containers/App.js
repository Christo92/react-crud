import React, { Component } from 'react';
// Components
import Form from './Form';
import List from './List';
// Redux
import { connect } from 'react-redux';

class App extends Component {

    render() {
        // Root of the application
        return (
            <div>
                <h3>React-CRUD</h3>
                <Form />
                <List />
            </div>
        );
    }
}

export default connect()(App);