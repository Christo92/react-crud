import React, { Component } from 'react';
// Uuid
import Uuid from 'uuid/v4';
// Redux
import { connect } from 'react-redux';
// Actions 
import { addPersonAction } from '../actions/formActions';

class Form extends Component {

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

        // Let's call the actionCreator
        this.props.addPersonAction(data);

        // Empties the fields
        this.refs.inputFirsName.value = '';
        this.refs.inputLastName.value = '';
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>Firstname :</p>
                    <input 
                        type="text"
                        ref="inputFirsName"
                        placeholder="firstname" 
                        value={this.props.firstName}
                    />
                    <p>Lastname :</p>
                    <input 
                        type="text"
                        ref="inputLastName"
                        placeholder="lastname"
                        value={this.props.lastName}
                    />
                    <br/><br/>
                    <button>Submit</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Form);