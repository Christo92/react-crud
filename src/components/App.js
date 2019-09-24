import React, { Component } from 'react';
// Components
import Form from './Form';
import List from './List';
// Styles
import './styles/index.scss'
// Redux
import { connect } from 'react-redux';

export class App extends Component {

    render() {
        // Root of the application
        return (
            <div>
                <header className="header">
                    <h1 className="header__app-title">React-CRUD</h1>
                </header>
                <h2 className="sentence">Let's create a person's list</h2>
                <Form />
                <List />
            </div>
        );
    }
}

export default connect()(App);