import React from 'react'
import { Message } from './Message'

const MessageList = ({messages}) => (
    <div id="messages">
        { messages.map( (message, i) => <Message key={i} {...message} /> ) }
    </div>
)

export default MessageList;
