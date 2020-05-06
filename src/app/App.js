import React from 'react';
import Login from './login/Login';
import Chat from './chat/Chat';

class App extends React.Component
{
    constructor(props) {
        super(props);
        this.state = { username : "" };
    }

    render() {
        document.title = this.state.username || "Log in";
        return (
            this.state.username ? 
                <Chat user={this.state.username} logout={() => this.setState({username : ""})}/> :
                <Login onSuccess={login => this.setState({ username : login })} />
        );
    }
}

export default App;
