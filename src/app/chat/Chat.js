import Message from './Message'
import React from 'react';

class Chat extends React.Component
{
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.state = {
            messages : JSON.parse(localStorage.messages || "[]"),
            currentMessageText : "",
        };
        onstorage = () => {
            this.setState({ messages : JSON.parse(localStorage.messages || "[]") }) 
        }
    }

    submit() {
        if (this.state.currentMessageText === "") {
            return;
        }
        const newMessage = {    
            author : this.props.user,
            datetime : new Date().toGMTString(),
            text : this.state.currentMessageText,
        };
        const newMessages = this.state.messages.concat(newMessage);
        localStorage.messages = JSON.stringify(newMessages);
        this.setState({
            messages : newMessages,
            currentMessageText : "",
        });
    }

    render() {
        return (
            <div id="chat">
                <button id="logout" onClick={this.props.logout}> Log out </button>
                <textarea value={this.state.currentMessageText}
                          onChange={ev => this.setState({currentMessageText : ev.target.value})}>
                </textarea>
                <button type="submit" onClick={this.submit}> Send </button>
                <div id="messages">
                    {this.state.messages.map((message, i) => <Message key={i} {...message} />)}
                </div> 
            </div>
        );        
    }
}

export default Chat;
