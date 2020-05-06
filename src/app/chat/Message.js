import React from 'react';
import PropTypes from 'prop-types';

const Message = ({author, datetime, text}) => (
    <div className="message">
        <strong>{author}</strong>
        <span className="datetime">{datetime}</span>
        <p>{text}</p>
    </div>
);

Message.propTypes = {
    author: PropTypes.string.isRequired,
    datetime: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default Message;
