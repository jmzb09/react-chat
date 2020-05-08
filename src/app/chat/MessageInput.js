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
        <div id="input">
            <textarea value={text} onChange={ev => setText(ev.target.value)}></textarea>
            <button type="submit" onClick={handleClick}> Send </button>
        </div>
    )
}

export default MessageInput
