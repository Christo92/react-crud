import React, { Component } from 'react';
// Components
import Person from './Person';
import EditForm from './EditForm';
// Redux
import { connect } from 'react-redux';
// Action Types
import { removeAllPersonAction } from '../actions/formActions';


export class List extends Component {

    // Add remove all actions
    handleRemoveAll = () => {
        this.props.removeAllPersons();
    };

    render() {

        // Destructuring
        let { formReducer } = this.props.allPersons;
        let displayBlock;

        // To 
        if (formReducer.length > 0) {
            displayBlock = <div className="list-subtitle">
                                <h2 className="list-subtitle__title">Person List</h2>
                                <button className="list-subtitle__removeAll" onClick={this.handleRemoveAll}>Remove All</button>
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