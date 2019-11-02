import React from 'react';
// Redux
import { connect } from 'react-redux';
// Action Types
import { removePersonAction, editPersonAction } from '../actions/formActions';
// PropTypes
import PropTypes from 'prop-types';

export const Person = (props) => {

    function handleRemovePerson() {
        // Send the id of person to param
        let idPerson = props.person.id;
        props.removePerson(idPerson)
    };

    function handleEditPerson() {
        // Send the id of person to param
        let idPerson = props.person.id;
        props.editPerson(idPerson)
    };


    // Let's destructuring
    const { firstName, lastName } = props.person;

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
                        <button className="person-container_edit" onClick={handleEditPerson}>Edit</button>
                        <button className="person-container_remove" onClick={handleRemovePerson}>Remove</button>
                    </div>
                </div>
            }
        </div>
    );
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

Person.propTypes = {
    person: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string
    }).isRequired,
    removePerson: PropTypes.func.isRequired,
    editPerson: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(Person);