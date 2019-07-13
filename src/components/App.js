import React, { Component } from 'react';
// Components
import Form from './Form';
import List from './List';

class App extends Component {

    state = {
        personList: []
    };

    // Add person on the list
    addPerson = (value) => {
        let oldPersonList = this.state.personList;
        let newPerson = [...oldPersonList, value];

        this.setState({
            personList: newPerson
        });
    };

    render() {

        const { personList } = this.state;

        return (
            <div>
                <h3>React-CRUD</h3>
                <Form addPerson={this.addPerson}/>
                <List personList={personList}/>
            </div>
        );
    }
}

export default App;