import React from 'react';
import PropTypes from 'prop-types';

const currentTime = () => new Date().toLocaleTimeString()
const currentDate = () => new Date().toLocaleDateString()
export const messageCreator = author => 
    text => ({ author, date : currentDate(), time: currentTime(), text })

export const Message = ({author, date, time, text}) => (
    <div className="border px-3" id="message">
        <strong className="font-weight-bold">{author} </strong>
        <span className="font-weight-lighter"> &middot; {time} &middot; {date}</span>
        <pre className="font-weight-normal overflow-auto">{text}</pre>
    </div>
);

Message.propTypes = {
    author: PropTypes.string.isRequired,
    datetime: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};
