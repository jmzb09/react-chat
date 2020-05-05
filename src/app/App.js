import React from 'react';
import Login from './Login';
import Chat from './Chat';

class App extends React.Component
{
    constructor(props) {
        super(props);
        this.state = { username : "" };
    }

    render() {
        return (
            this.state.username ? 
                <Chat user={this.state.username} logout={() => this.setState({username : ""})}/> :
                <Login onSuccess={login => this.setState({ username : login })} />
        );
    }
}

export default App;
