import React from 'react';
import PropTypes from "prop-types";

const Message = (props) => {
    const {message, index, user} = props;
    return <li
        key={index}
        className={
            message.username === user.username ? 'message sender' : 'message recipient'
        }
    >
        <p>{`${message.username}: ${message.text}`}</p>
    </li>
};

Message.propTypes = {
    user: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
    index: PropTypes.string.isRequired
};

export default Message;