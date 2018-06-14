import React, {Component} from "react";
import './AddUser.css';
import PropTypes from "prop-types";

class AddUser extends Component {

    state = {
        error: '',
        firstName: '',
        lastName: '',
        userName: '',
    };

    updateFirstName = (firstName) => {
        this.setState(()=>({
            firstName: firstName
        }));
    };

    updateLastName = (lastName) => {
        this.setState(()=>({
            lastName: lastName
        }));
    };

    updateUserName = (userName) => {
        this.setState(()=>({
            userName: userName
        }));
    };

    addUser = (event) => {
        event.preventDefault();
        const { users } = this.props;

        // If this user is already added in the list, let's throw an error.
        let userNameToAdd = this.state.userName;
        const alreadyExist = users.some(user => user.userName === userNameToAdd);
        if(alreadyExist) {
            this.setState(() =>({
                error: 'User with same username already exist.'
            }))
        } else {
            this.props.addUserHandler({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                userName: this.state.userName,
                numGamesPlayed: 0
            })
            // Let's reset the form again.
            this.setState(() => ({
                error: '',
                firstName: '',
                lastName: '',
                userName: ''
            }));
        }
    }

    render() {
        const { firstName, lastName, userName, error } = this.state;
        const isAddActionDisabled = firstName === '' || lastName === '' || userName === '';
        return (
            <div className='add-user' align="center">
                <h1>Add User</h1>
                <form onSubmit={this.addUser}>
                    {
                        error !== '' && (
                            <label className='error'>* {error}</label>
                        )
                    }
                    <table>
                        <tbody>
                        <tr><td><label>First Name</label><br/></td></tr>
                        <tr><td><input type='text' placeholder='Enter first name' value={firstName}
                            onChange={(event) => this.updateFirstName(event.target.value)}/><br/></td></tr>
                        <tr><td><label>Last Name</label><br/></td></tr>
                        <tr><td><input type='text' placeholder='Enter last name' value={lastName}
                                       onChange={(event) => this.updateLastName(event.target.value)}/><br/></td></tr>
                        <tr><td><label>Last Name</label><br/></td></tr>
                        <tr><td><input type='text' placeholder='Enter user name' value={userName}
                                       onChange={(event) => this.updateUserName(event.target.value)}/><br/></td></tr>
                        <tr><td><button disabled={isAddActionDisabled}>Add</button></td></tr>
                        </tbody>
                    </table>
                </form>

            </div>
        )
    }

}

AddUser.propTypes = {
    addUserHandler: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
};

export default AddUser;