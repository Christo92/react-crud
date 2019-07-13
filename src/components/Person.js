import React, { Component } from 'react';

class Person extends Component {

    state = {
        firstName: '',
        lastName: '',
    };

    // Update the state when the component mounts
    componentDidMount() {
        this.setState({
            firstName: this.props.person.firstName,
            lastName: this.props.person.lastName
        })
    }

    render() {
        const { firstName, lastName } = this.state

        return (
            <div>
                <li>FirstName: {firstName} </li>
                <li>LastName: {lastName}</li>
                <button>Remove</button>
                <button>Edit</button>
            </div>
        );
    }
}

export default Person;