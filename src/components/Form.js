import React, { useRef } from 'react';
// Uuid
import Uuid from 'uuid/v4';
// Redux
import { connect } from 'react-redux';
// Actions 
import { addPersonAction } from '../actions/formActions';
// PropTypes
import PropTypes from 'prop-types';

export const Form = (props) => {

    // Ref Hooks
    const inputFirstName = useRef(null);
    const inputLastName = useRef(null);

    // Submit the form
    function handleSubmit(e) {
        e.preventDefault();
        // Let's get value of all fields
        let id = Uuid();
        let firstName = inputFirstName.current.value;
        let lastName = inputLastName.current.value;

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
            props.addPersonAction(data);

            // Empties the fields
            inputFirstName.current.value = '';
            inputLastName.current.value = '';
        }
    };


    return (
        <div className="form-container">
            <h2 className="form-container__title">Person Form</h2>
            <form className="form-container__form" onSubmit={handleSubmit}>
                <p>Firstname :</p>
                <input
                    className="form-container__inputFirstName"
                    type="text"
                    ref={inputFirstName}
                    placeholder="firstname"
                    value={props.firstName}
                />
                <p>Lastname :</p>
                <input
                    className="form-container__inputLastName"
                    type="text"
                    ref={inputLastName}
                    placeholder="lastname"
                    value={props.lastName}
                />
                <button className="form-container__submit">Submit</button>
            </form>
        </div>
    )
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