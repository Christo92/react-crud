import React, { Component } from 'react';

class Form extends Component {

    state = {
        firstName: '',
        lastName: ''
    };

    // Handle the change value of the firstname input
    handleChangeFirstName = (e) => {
        this.setState({
            firstName: e.target.value
        });
    };

    // Handle the change value of the lastname input
    handleChangeLastName = (e) => {
        this.setState({
            lastName: e.target.value
        });
    };

    // Submit the form
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPerson(this.state);

        // To reset the input
        this.setState({
            firstName: '',
            lastName: ''
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>Firstname :</p>
                    <input 
                        type="text" 
                        placeholder="firstname" 
                        value={this.state.firstName}
                        onChange={this.handleChangeFirstName}
                    />
                    <p>Lastname :</p>
                    <input 
                        type="text" 
                        placeholder="lastname"
                        value={this.state.lastName}
                        onChange={this.handleChangeLastName}
                    />
                    <br/><br/>
                    <button>Submit</button>
                </form>
            </div>
        )
    };
}

export default Form;