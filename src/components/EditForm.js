import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
// Action Types
import { updatePersonAction } from '../actions/formActions';

export class EditForm extends Component {

    // To update the person we selected
    handleUpdatePerson = (e) => {
        e.preventDefault();
        // First we get the new value with refs
        let updateFirstName = this.refs.updateFirstName.value;
        let updateLastName = this.refs.updateLastName.value;
        let idPerson = this.props.person.id;

        // Let's store the new data
        const data = {
            updateFirstName,
            updateLastName
        };
        
        // Then we call the action creator
        this.props.updatePerson(idPerson, data);
    };

    render() {

        // Destructuring
        let { firstName, lastName } = this.props.person;

        return (
            <div className="editform-container">
                <p className="editform-container__title">Edit this person</p>
                <form className="editform-container__form" onSubmit={this.handleUpdatePerson}>
                    <p className="editform-container__updateFirstName">FirstName:</p>
                    <input
                        className="editform-container__inputFirstName"
                        type="text"
                        ref="updateFirstName"
                        placeholder={firstName}
                    />
                    <p className="editform-container__updateLastName">LastName:</p>
                    <input
                        className="editform-container__inputLastName"
                        type="text"
                        ref="updateLastName"
                        placeholder={lastName}
                    />
                    <br /><br />
                    <button className="editform-container__updateButton">Update</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updatePerson: (id, data) => {
            dispatch(updatePersonAction(id, data))
        }
    }
}

export default connect(null, mapDispatchToProps)(EditForm);