import React, {Component} from "react";
import User from './User';
import PropTypes from 'prop-types';

class DisplayUsers extends Component {

    state = {
        hideGames: false
    };

    toggleGames = () => {
        this.setState((prevState) => ({
            hideGames: !prevState.hideGames
        }));
    };

    render() {
        const {users} = this.props;
        console.log("Size of users : " + users.length);
        const {hideGames} = this.state;
        return (
            <div>
                <h1>Display Users</h1>
                {
                    users.length !== 0 && (
                        <div className='toggle-games'>
                            <button onClick={this.toggleGames}><u>
                                {
                                    !hideGames ? (
                                        'Hide the Number of Games Played'
                                    ) : 'Show the Number of Games Played'
                                }
                            </u></button>
                        </div>
                    )
                }
                {
                    users.map((user) => (
                            <User key={user.userName} user={user} hideGames={hideGames}/>
                        )
                    )
                }
            </div>
        )
    }
}

DisplayUsers.propTypes = {
    users: PropTypes.array.isRequired,
};

export default DisplayUsers;