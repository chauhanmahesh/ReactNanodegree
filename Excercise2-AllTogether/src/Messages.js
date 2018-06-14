import React from 'react';
import Message from './Message';
import PropTypes from "prop-types";

const Messages = (props) => {
    const {messages, user} = props;
    return <ul className="message-list">
        {messages.map((message, index) => (
            <Message message={message} index={index} user={user}/>
        ))}
    </ul>
};

Messages.propTypes = {
    user: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired
};

export default Messages;