import React, { useState } from 'react'
import MessageList from './MessageList'
import MessageInput from './MessageInput'
import {messageCreator} from './Message'
import {loadSavedMessages, saveMessages} from './Storage'

const Chat = ({user, logout}) => {
    const [messages, setMessages] = useState(loadSavedMessages())
    onstorage = () => setMessages(loadSavedMessages())

    const messageObject = messageCreator(user);

    const submit = text => {
        const newMessages = messages.concat(messageObject(text));
        saveMessages(newMessages);
        setMessages(newMessages);
    }
    
    return (
        <div id="chat">
            <div className="p-3 mb-2 bg-info text-white">
               <span className="font-weight-bolder">{user}</span>
               <button className="btn btn-danger float-right" onClick={logout}> Log out </button>
            </div>
            <MessageInput send={submit} />
            <MessageList messages={messages} />
        </div>
    );
}

export default Chat;
