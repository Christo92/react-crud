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
                    <div className="person-container">
                        <li className="person-container__firstName">
                            <p className="person-container__label">FirstName:</p> 
                            
                            <p className="person-container__person">{firstName}</p>    
                        </li>
                        <li className="person-container__lastName">
                            <p className="person-container__label">LastName:</p>
                            <p className="person-container__person">{lastName}</p>   
                        </li>
                        <div className="person-container__buttons">
                            <button className="person-container_edit" onClick={this.handleEditPerson}>Edit</button>
                            <button className="person-container_remove" onClick={this.handleRemovePerson}>Remove</button>
                        </div>
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