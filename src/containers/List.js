import React, { Component } from 'react';
// Components
import Person from './Person';
import EditForm from './EditForm';
// Redux
import { connect } from 'react-redux';
// Action Types
import { removeAllPersonAction } from '../actions/formActions';


class List extends Component {

    // Add remove all actions
    handleRemoveAll = () => {
        this.props.removeAllPersons();
    };

    render() {

        // Destructuring
        let personList = this.props.allPersons.formReducer;
        let button;

        // To 
        if (personList.length > 0) {
               button = <button onClick={this.handleRemoveAll}>Remove All</button>
        } else {
               button = ''
        }

        return (
            <div>
                <h1>Person List</h1>
                {button}
                {
                    personList.map(person => (
                        <div key={person.id} >
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
        )
    }

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

export default connect(mapStateToProps, mapDispatchToProps)(List);