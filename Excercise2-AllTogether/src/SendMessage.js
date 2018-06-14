import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SendMessage extends Component {

    state = {
        messageToSend: ''
    };

    updateMessageToSend = value => {
        this.setState(() => ({
            messageToSend: value
        }));
    };

    clearField = () => {
        this.setState(() => ({
            messageToSend: ''
        }))
    };

    sendMessage = event => {
        event.preventDefault();
        this.props.sendMessageHandler(this.state.messageToSend)
        // Let's clear the chat input.
        this.clearField();
    };

    render() {
        const {messageToSend} = this.state;
        const isSendDisabled = messageToSend === '';
        return <div>
            <form className="input-group" onSubmit={this.sendMessage}>
                <input type="text" className="form-control" value={messageToSend}
                       onChange={(event) => this.updateMessageToSend(event.target.value)}
                       placeholder="Enter your message..."/>
                <div className="input-group-append">
                    <button className="btn submit-button" disabled={isSendDisabled}>
                        SEND
                    </button>
                </div>
            </form>
        </div>
    }

}

SendMessage.propTypes = {
    sendMessageHandler: PropTypes.func.isRequired
};

export default SendMessage;