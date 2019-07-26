import React, { Component } from 'react';
// Components
import Form from './Form';
import List from './List';
// Redux
import { connect } from 'react-redux';

class App extends Component {

    // Remove person from the list
    removePerson = (item) => {
        // We use filter to not mutate the personList array
        // let removePerson = this.state.personList.filter(removeItem => {
        //     return removeItem !== item
        // });

        // // then we update the state a new time
        // this.setState({
        //     personList: [...removePerson]
        // });
        this.props.removePerson(item);
    };

    render() {

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