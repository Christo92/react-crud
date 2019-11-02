import React, { useRef } from 'react';
// Redux
import { connect } from 'react-redux';
// Action Types
import { updatePersonAction } from '../actions/formActions';
// PropTypes
import PropTypes from 'prop-types';

export const EditForm = (props) => {

    const inputFirstName = useRef(null);
    const inputLastName = useRef(null);

    // To update the person we selected
    function handleUpdatePerson(e) {
        e.preventDefault();
        // First we get the new value with refs
        let updateFirstName = inputFirstName.current.value;
        let updateLastName = inputLastName.current.value;
        let idPerson = props.person.id;

        // Let's store the new data
        const data = {
            updateFirstName,
            updateLastName
        };

        // Then we call the action creator
        props.updatePerson(idPerson, data);
    };

    // Destructuring
    let { firstName, lastName } = props.person;

    return (
        <div className="editform-container">
            <p className="editform-container__title">Edit this person</p>
            <form className="editform-container__form" onSubmit={handleUpdatePerson}>
                <p className="editform-container__updateFirstName">FirstName:</p>
                <input
                    className="editform-container__inputFirstName"
                    type="text"
                    ref={inputFirstName}
                    placeholder={firstName}
                />
                <p className="editform-container__updateLastName">LastName:</p>
                <input
                    className="editform-container__inputLastName"
                    type="text"
                    ref={inputLastName}
                    placeholder={lastName}
                />
                <br /><br />
                <button className="editform-container__updateButton">Update</button>
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        updatePerson: (id, data) => {
            dispatch(updatePersonAction(id, data))
        }
    }
}

EditForm.propTypes = ({
    person: PropTypes.shape({
        id: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string
    }).isRequired,
    updatePerson: PropTypes.func.isRequired
})

export default connect(null, mapDispatchToProps)(EditForm);