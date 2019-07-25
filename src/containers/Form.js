import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
// Actions 
import { addPersonAction } from '../actions/formActions';

class Form extends Component {

    // Submit the form
    handleSubmit = (e) => {
        e.preventDefault();
        let firstName = this.refs.inputFirsName.value;
        let lastName = this.refs.inputLastName.value;
        const data = {
            firstName,
            lastName
        }

        // Let's call the actionCreator
        this.props.addPersonAction(data);

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
                        onChange={this.handleChangeFirstName}
                    />
                    <p>Lastname :</p>
                    <input 
                        type="text"
                        ref="inputLastName"
                        placeholder="lastname"
                        value={this.props.lastName}
                        onChange={this.handleChangeLastName}
                    />
                    <br/><br/>
                    <button>Submit</button>
                </form>
            </div>
        )
    };
}

const mapStateToProps = state => {
    return {
        personList: state.personList,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addPersonAction: (value) => {
            dispatch(addPersonAction(value));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);