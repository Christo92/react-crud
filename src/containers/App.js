import React, { Component } from 'react';
// Components
import Form from './Form';
import List from '../components/List';
// Redux
import { connect } from 'react-redux';

class App extends Component {

    // Add person on the list
    addPerson = (value) => {
        // let oldPersonList = this.state.personList;
        // let newPerson = [...oldPersonList, value];

        // this.setState({
        //     personList: newPerson
        // });
        this.props.addPerson(value);
    };

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

        // Let's destructuring
        //const { personList } = this.state;

        return (
            <div>
                <h3>React-CRUD</h3>
                <Form/>
                <List 
                    personList={this.props.personList}
                    removePerson={this.removePerson}
                />
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         personList: state.personList
//     }
// };

// const mapDisptachToProps = dispatch => {
//     return {
//         addPerson: () => {
//             dispatch(addPersonAction());
//         },
//         removePerson: () => {
//             dispatch(removePerson());
//         }
//     }

// };

export default connect()(App);