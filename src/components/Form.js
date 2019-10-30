import React, { Component } from 'react';
// Uuid
import Uuid from 'uuid/v4';
// Redux
import { connect } from 'react-redux';
// Actions 
import { addPersonAction } from '../actions/formActions';
// PropTypes
import PropTypes from 'prop-types';

export class Form extends Component {

    // Submit the form
    handleSubmit = (e) => {
        e.preventDefault();
        // Let's get value of all fields
        let id = Uuid();
        let firstName = this.refs.inputFirsName.value;
        let lastName = this.refs.inputLastName.value;

        // Store the data
        const data = {
            id,
            firstName,
            lastName,
            isEditing: false
        }

        if (firstName === '' && lastName === '') {
            console.log("Both fields are empty");
        } else if (firstName === '') {
            console.log("firstName's field is empty");
        } else if (lastName === '') {
            console.log("lastName's field is empty");
        } else {
            // Let's call the actionCreator
            this.props.addPersonAction(data);

            // Empties the fields
            this.refs.inputFirsName.value = '';
            this.refs.inputLastName.value = '';
        }
    };

    render() {

        return (
            <div className="form-container">
                <h2 className="form-container__title">Person Form</h2>
                <form className="form-container__form" onSubmit={this.handleSubmit}>
                    <p>Firstname :</p>
                    <input 
                        className="form-container__inputFirstName"
                        type="text"
                        ref="inputFirsName"
                        placeholder="firstname" 
                        value={this.props.firstName}
                    />
                    <p>Lastname :</p>
                    <input 
                        className="form-container__inputLastName"
                        type="text"
                        ref="inputLastName"
                        placeholder="lastname"
                        value={this.props.lastName}
                    />
                    <button className="form-container__submit">Submit</button>
                </form>
            </div>
        )
    };
}


// Let's change state to props
const mapStateToProps = state => {
    return {
        personList: state
    }
};

// Let's change function to props
const mapDispatchToProps = dispatch => {
    return {
        addPersonAction: (value) => {
            dispatch(addPersonAction(value));
        }
    }
};

Form.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    addPersonAction: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);