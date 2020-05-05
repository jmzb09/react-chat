import Message from './Message'
import React from 'react';

class Chat extends React.Component
{
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.state = { messages : [] };
    }

    submit() {
        const newMessage = {    
            author : this.props.user,
            datetime : new Date().toGMTString(),
            text : this.refs._text.value,
        };
        this.refs._text.value = "";
        console.log(JSON.stringify(this.state.messages.concat(newMessage)));
        this.setState({ messages : this.state.messages.concat(newMessage) });
    }

    render() {
        return (
            <div id="chat">
                <button id="logout" onClick={this.props.logout}> Log out </button>
                <textarea ref="_text"></textarea>
                <button type="submit" onClick={this.submit}> Send </button>
                <div id="messages">
                    {this.state.messages.map((message, i) => <Message key={i} {...message} />)}
                </div> 
            </div>
        );        
    }
}

export default Chat;










