import Message from './Message'
import React from 'react';

class Chat extends React.Component
{
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.state = { messages : JSON.parse(localStorage.messages || "[]") };
        onstorage = () => {
            this.setState({ messages : JSON.parse(localStorage.messages || "[]") }) 
        }
    }

    submit() {
        let {_text} = this.refs;
        if (_text.value === "") {
            return;
        }
        const newMessage = {    
            author : this.props.user,
            datetime : new Date().toGMTString(),
            text : _text.value,
        };
        _text.value = "";
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
