import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
// Action Types
import { removePersonAction } from '../actions/formActions';

class Person extends Component {

    handleRemovePerson = () => {
        // Send the id of person to param
        let idPerson = this.props.person.id;
        this.props.removePerson(idPerson)
    }

    render() {

        // Let's destructuring
        const { firstName, lastName } = this.props.person;
        // const { removePerson } = this.props;
        //let { personList } = this.props.allPersons.formReducer.personList;

        return (
            <div>
                {
                        // View of the person
                        <div>
                            <li>FirstName: {firstName} </li>
                            <li>LastName: {lastName}</li>
                            <button onClick={this.handleRemovePerson}>Remove</button>
                            <button>Edit</button>
                        </div>
                    // isEditing ? (
                    //     // Form to Update person
                    //     <form onSubmit={this.handleUpdate}>
                    //         <input
                    //             type="text"
                    //             placeholder="first name"
                    //             value={firstName}
                    //             onChange={this.handleUpdateFirstName}
                    //         />
                    //         <br /><br />
                    //         <input
                    //             type="text"
                    //             placeholder="last name"
                    //             value={lastName}
                    //             onChange={this.handleUpdateLastName}
                    //         />
                    //         <br /><br />
                    //         <button>Update</button>
                    //     </form>
                    // ) : (
                    //     // View of the person
                    //     <div>
                    //         <li>FirstName: {firstName} </li>
                    //         <li>LastName: {lastName}</li>
                    //         <button onClick={(e) => removePerson(this.props.person)}>Remove</button>
                    //         <button onClick={this.editPerson}>Edit</button>
                    //     </div>
                    // )
                }
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removePerson: (id) => {
            dispatch(removePersonAction(id))
        }
    }
}



export default connect(null, mapDispatchToProps)(Person);