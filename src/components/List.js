import React from 'react';
// Components
import Person from './Person';
import EditForm from './EditForm';
// Redux
import { connect } from 'react-redux';
// Action Types
import { removeAllPersonAction } from '../actions/formActions';
// PropTypes
import PropTypes from 'prop-types';

export const List = (props) => {

    // Add remove all actions
    function handleRemoveAll() {
        props.removeAllPersons();
    };

    // Destructuring
    let { formReducer } = props.allPersons;
    let displayBlock;

    // To 
    if (formReducer.length > 0) {
        displayBlock = <div className="list-subtitle">
            <h2 className="list-subtitle__title">Person List</h2>
            <button className="list-subtitle__removeAll" onClick={handleRemoveAll}>Remove All</button>
        </div>
    } else {
        displayBlock = ''
    }

    return (
        <div>
            {displayBlock}
            <div className="list-container">

                {
                    formReducer.map(person => (
                        <div className="person-block" key={person.id} >
                            {
                                person.isEditing ? (
                                    <EditForm person={person} key={person.id} />
                                ) : (
                                        <Person
                                            key={person.id}
                                            person={person}
                                        />
                                    )}
                        </div>

                    )
                    )
                }
            </div>
        </div>
    )
}

// Let's change state to props
const mapStateToProps = state => {
    return {
        allPersons: state
    }
};

const mapDispatchToProps = dispatch => {
    return {
        removeAllPersons: () => {
            dispatch(removeAllPersonAction())
        }
    }
}

List.propTypes = {
    allPersons: PropTypes.shape({
        formReducer: PropTypes.array
    }).isRequired,
    removeAllPersons: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(List);