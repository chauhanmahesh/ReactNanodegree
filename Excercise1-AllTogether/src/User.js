import React from "react";
import PropTypes from "prop-types";

const User = (props) => {
    const {user, hideGames} = props;
    console.log("Added user: " + user.userName + ", " + user.numGamesPlayed);
    return (
        <p>{user.userName} played {!hideGames ? user.numGamesPlayed : '*'} games.</p>
    )
};

User.propTypes = {
    user: PropTypes.object.isRequired,
    hideGames: PropTypes.bool.isRequired
};

export default User;