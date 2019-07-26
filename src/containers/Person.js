import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
// Action Types
import { removePersonAction, editPersonAction } from '../actions/formActions';

class Person extends Component {

    handleRemovePerson = () => {
        // Send the id of person to param
        let idPerson = this.props.person.id;
        this.props.removePerson(idPerson)
    };

    handleEditPerson = () => {
        // Send the id of person to param
        let idPerson = this.props.person.id;
        this.props.editPerson(idPerson)
    };

    render() {

        // Let's destructuring
        const { firstName, lastName } = this.props.person;

        return (
            <div>
                {
                    // View of the person
                    <div>
                        <li>FirstName: {firstName} </li>
                        <li>LastName: {lastName}</li>
                        <button onClick={this.handleRemovePerson}>Remove</button>
                        <button onClick={this.handleEditPerson}>Edit</button>
                    </div>
                }
            </div>
        );
    }
}

// Let's change function to props
const mapDispatchToProps = dispatch => {
    return {
        removePerson: (id) => {
            dispatch(removePersonAction(id))
        },
        editPerson: (id) => {
            dispatch(editPersonAction(id));
        }
    }
};

export default connect(null, mapDispatchToProps)(Person);