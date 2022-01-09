import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Header from './Header';

class Configuration extends React.Component {
    textInput = React.createRef();
    chat = React.createRef()

    static propTypes = {
        changeName: PropTypes.func.isRequired
    };

    constructor() {
        super();
        this.state = {
            inputUsername: this.textInput,
            inputChat: this.chat
        };
        this.changeName = this.changeName.bind(this);
        this.goToChat = this.goToChat.bind(this);
    }

  

    changeName(){        
        this.props.changeName(this.textInput.current.value);
    }


    goToChat(event) {
        console.log(this.state.inputChat);
        const url = window.location.href;
        const urlSplit = url.split("/");
        const userName = urlSplit[urlSplit.length - 2];
        this.setState({
            inputChat: event.target.value
        });
        event.preventDefault();
        const chat = this.chat.current.value;
        window.location.href = `/${chat}`
    }

    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <form className="chatselector" value={this.state.textInput} onSubmit={event => this.changeName(event)}>
                    <label >Change Name:</label>
                    <input className='changeName'
                        type="text"
                        ref={this.textInput}
                        required
                        placeholder="Name" />
                    <br></br>
                    <button type="submit" >Change</button>
                </form>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <form className="chatselector">
                    <label>Chat:  </label>
                    <br></br>
                    <select className='changeName' ref={this.chat} value={this.state.inputChat} onChange={event => this.goToChat(event)}>
                        <option value="1">Chat 1</option>
                        <option value="2">Chat 2</option>
                        <option value="3">Chat 3</option>
                        <option value="4">Chat 4</option>
                    </select>
                </form>
            </div >
        );
    }
}

export default Configuration;