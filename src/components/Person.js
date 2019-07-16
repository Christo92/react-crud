import React, { Component } from 'react';

class Person extends Component {

    state = {
        firstName: '',
        lastName: '',
        isEditing: false
    };

    // Update the state when the component mounts
    componentDidMount() {
        this.setState({
            firstName: this.props.person.firstName,
            lastName: this.props.person.lastName
        });
    }

    // Update value from a person
    editPerson = () => {
        // Change the isEditing boolean value
        this.setState({
            isEditing: !this.state.editing
        });
    };

    // Update the firstName value of a person
    handleUpdateFirstName = (e) => {
        this.setState({
            firstName: e.target.value
        });
    };

    // Update the lastName value of a person
    handleUpdateLastName = (e) => {
        this.setState({
            lastName: e.target.value
        });
    };

    render() {

        // Let's destructuring
        const { firstName, lastName } = this.state;
        const { removePerson } = this.props;

        return (
            <div>
                <li>FirstName: {firstName} </li>
                <li>LastName: {lastName}</li>
                <button onClick={(e) => removePerson(this.props.person)}>Remove</button>
                <button>Edit</button>
            </div>
        );
    }
}

export default Person;