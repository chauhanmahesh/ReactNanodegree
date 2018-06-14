import React from 'react';
import Messages from './Messages';
import PropTypes from "prop-types";

const UserChatBox = (props) => {
    const {user, messages} = props;
    return <div>
        <div className="name sender">{user.username}</div>
        <Messages messages={messages} user={user}/>
    </div>
};

UserChatBox.propTypes = {
    user: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired
};

export default UserChatBox;