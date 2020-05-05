import React from 'react';

const Message = ({author, datetime, text}) => (
    <div className="message">
        <strong>{author}</strong>
        <span className="datetime">{datetime}</span>
        <p>{text}</p>
    </div>
);

export default Message;
