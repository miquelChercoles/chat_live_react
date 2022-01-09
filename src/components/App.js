import React from 'react';
import Header from './Header';
import base from '../base';
import sampleMessages from '../sample-chat';
import Message from './Message';
import MessageUser from './MessageUser';
import Configuration from './Configuration';
import ScrollableFeed from 'react-scrollable-feed'

class App extends React.Component {

    state = {
        username: localStorage.getItem('username'),
        messages: {}
    };

    addMessage = (message) => {
        const messages = { ...this.state.messages }; //use of SPREAD
        //2. add new message with unique key
        messages[`message${Date.now()}`] = message;
        //3. Set the new messages object to state
        console.log(messages);
        this.setState({
            messages: messages
        });
    };

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    loadSampleMessages = () => {

        this.setState({
            messages: sampleMessages
        });
    };

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    componentDidUpdate() {

        localStorage.setItem(this.props.match.params.chatId, JSON.stringify(this.state.chat));
        console.log(this.props.match.params.chatId);
        console.log(localStorage.getItem('username'));
    };

    componentDidMount() {

        const { params } = this.props.match;

        console.log(this.props.match);
        this.ref = base.syncState(`1/${params.chatId}`, {
            context: this,
            state: 'messages'
        });

    };

    changeName = (name) => {
        localStorage.setItem('username', name);
        this.setState({
            username: name
        });
    };

    render() {


        return (
            <div className="wrapper">
                <div className="head">
                    <Header
                        username={this.state.username}
                    />
                </div>
                <section className="configuration">
                    <Configuration
                        username={this.state.username}
                        changeName={this.changeName}
                    />
                </section>
                <section className="chatbox">
                    <div className="chatScroll">
                    <ScrollableFeed >
                        <ul>
                            {Object.keys(this.state.messages).map(key =>
                                <Message
                                    key={key}
                                    index={key}
                                    details={this.state.messages[key]}
                                />)
                            }
                        </ul>
                    </ScrollableFeed>
                    </div>
                    <MessageUser
                        addMessage={this.addMessage}
                        loadSampleMessages={this.loadSampleMessages}
                    />
                </section>
            </div>
        );
    }
}
export default App;