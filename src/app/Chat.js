import Message from './Message'
import React from 'react';

class Chat extends React.Component
{
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        let {messages} = localStorage;
        messages = messages ? JSON.parse(messages) : [];
        this.state = {messages};
        onstorage = () => { this.setState({messages : JSON.parse(localStorage.messages)}) };
    }

    submit() {
        const newMessage = {    
            author : this.props.user,
            datetime : new Date().toGMTString(),
            text : this.refs._text.value,
        };
        this.refs._text.value = "";
        const newMessages = this.state.messages.concat(newMessage);
        this.setState({ messages : newMessages });
        localStorage.messages = JSON.stringify(newMessages);
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
