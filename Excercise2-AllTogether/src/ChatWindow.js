import React, {Component} from 'react';
import UserChatBox from './UserChatBox';
import SendMessage from './SendMessage';
import PropTypes from 'prop-types';

class ChatWindow extends Component {

    sendMessageHandler = (message) => {
        // Let's add that message to messages list with user who sent that.
        this.props.sentMessageHandler({
            username: this.props.user.username,
            text: message
        })
    };

    render() {
        const {user, messages} = this.props;
        return (<div className="chat-window">
            <h2>Super Awesome Chat</h2>

            <UserChatBox user={user} messages={messages}/>
            <SendMessage sendMessageHandler={this.sendMessageHandler}/>
        </div>)
    }
}

ChatWindow.propTypes = {
    user: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired,
    sentMessageHandler: PropTypes.func.isRequired
};

export default ChatWindow;