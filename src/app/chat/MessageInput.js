import React, { useState } from 'react'

const MessageInput = ({send}) => {
    const [text, setText] = useState("")
    const handleClick = () => {
        if (text !== "") {
            send(text)
            setText("")
        }
    }
    return (
        <div id="messageInput">
            <textarea className="form-control" rows="2"
                      value={text} onChange={ev => setText(ev.target.value)}></textarea>
            <button className="btn btn-primary"
                    type="submit" onClick={handleClick}> Send </button>
        </div>
    )
}

export default MessageInput
