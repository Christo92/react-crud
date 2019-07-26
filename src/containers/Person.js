import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';

class Person extends Component {

    // state = {
    //     firstName: '',
    //     lastName: '',
    //     isEditing: false
    // };

    // Update the state when the component mounts
    // componentDidMount() {
    //     this.setState({
    //         firstName: this.props.person.firstName,
    //         lastName: this.props.person.lastName
    //     });
    // };

    // Update value from a person
    // editPerson = () => {
    //     // Change the isEditing boolean value
    //     this.setState({
    //         isEditing: !this.state.editing
    //     });
    // };

    // Update the firstName value of a person
    // handleUpdateFirstName = (e) => {
    //     this.setState({
    //         firstName: e.target.value
    //     });
    // };

    // Update the lastName value of a person
    // handleUpdateLastName = (e) => {
    //     this.setState({
    //         lastName: e.target.value
    //     });
    // };
    
    // handleUpdate = (e) => {
    //     e.preventDefault();
    //     this.setState({
    //         isEditing: false
    //     })
    // };


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
                            <button>Remove</button>
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



export default connect()(Person);