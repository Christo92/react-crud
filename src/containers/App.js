import React, { Component } from 'react';
// Components
import Form from './Form';
import List from '../components/List';

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

    // Remove person from the list
    removePerson = (item) => {
        // We use filter to not mutate the personList array
        let removePerson = this.state.personList.filter(removeItem => {
            return removeItem !== item
        });

        // then we update the state a new time
        this.setState({
            personList: [...removePerson]
        });
    };

    render() {

        // Let's destructuring
        const { personList } = this.state;

        return (
            <div>
                <h3>React-CRUD</h3>
                <Form addPerson={this.addPerson}/>
                <List 
                    personList={personList}
                    removePerson={this.removePerson}
                />
            </div>
        );
    }
}

export default App;