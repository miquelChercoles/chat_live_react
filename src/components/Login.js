import React from 'react';
class Login extends React.Component {
    username = React.createRef();
    chat = React.createRef()

    constructor() {
        super();
        this.goToChat = this.goToChat.bind(this);
    }

    goToChat(event) {
        event.preventDefault();
        console.log(this.username.current.value);
        localStorage.setItem('username', this.username.current.value);

        const chat = this.menu.value;
        this.props.history.push(`/${chat}`);
    }
    componentDidMount() {
        console.log('Mounted');
        console.log(this);
    }
    render() {
        return (
            <React.Fragment>
                <p style={{ textAlign: 'center', margin: '20px' }}>Hello, Chat now!</p>
                <br></br>
                <form className="chatselector" onSubmit={this.goToChat}>
                    <div>
                        <h2>Please enter your nickname</h2>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div>
                            <label >NickName:</label>
                            <input
                                type="text"
                                ref={this.username}
                                required
                                placeholder="Name" />
                        </div>
                        <br></br>
                        <div>
                            <label>Chat:  </label>
                            <select id="dropdown" ref={(chat) => this.menu = chat}>
                                <option value="1">Chat 1</option>
                                <option value="2">Chat 2</option>
                                <option value="3">Chat 3</option>
                                <option value="4">Chat 4</option>
                            </select>
                        </div>
                    </div>
                    <br></br>
                    <div style={{ textAlign: 'center' }}>
                        <button type="submit">Entry</button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}
export default Login;