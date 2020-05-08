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
            <button id="logout" onClick={logout}> Log out </button>
            <MessageInput send={submit} />
            <MessageList messages={messages} />
        </div>
    );
}

export default Chat;
