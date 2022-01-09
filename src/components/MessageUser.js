import React from 'react';
import AddMessageForm from './AddMessageForm';
import PropTypes from 'prop-types';

class MessageUser extends React.Component {
    name = React.createRef();
    text = React.createRef();
    date = React.createRef();

    static propTypes = {
        addMessage: PropTypes.func.isRequired
    };

    createMessage = (event) => {
        if (this.text.current.value != '') {
            event.preventDefault();
            const url = window.location.href;
            const userName = url.split("/")
            const nickName = localStorage.getItem('username');
            const date_message = Date.now();
            const message = {
                date: date_message,
                name: nickName,
                text: this.text.current.value
            };

            this.props.addMessage(message);
        }
        //reset the form
        event.currentTarget.reset();
    };

    render() {
        return (
            <form className="chat-input" onSubmit={this.createMessage}>
                <input className="input-chat" required type="text" ref={this.text} placeholder="Type a message" />
                <button type="submit">Send</button>
            </form>
        );
    }
}
export default MessageUser;