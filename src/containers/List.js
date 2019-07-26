import React, { Component } from 'react';
// Components
import Person from './Person';
// Redux
import { connect } from 'react-redux';

class List extends Component {

    // Add remove all actions

    render() {

        let { personList } = this.props.allPersons.formReducer;

        return (
            <div>
                <h1>All Persons</h1>
                {
                    personList.map(person => (
                        <Person 
                            key={person.id} 
                            person={person}
                            isEditing={person.isEditing}
                        />
                        ) 
                    )
                }
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        allPersons: state
    }
}

export default connect(mapStateToProps)(List);