import React from 'react'
import { Message } from './Message'

const MessageList = ({messages}) => (
    <div id="messageList">
        { messages.map( (message, i) => <Message key={i} {...message} /> ).reverse() }
    </div>
)

export default MessageList;
