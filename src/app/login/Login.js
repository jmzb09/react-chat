import React, { useState } from 'react'
import passwords from './passwords.json'

const Login = ({onSuccess}) => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [entryError, setEntryError] = useState("")

    const submit = ev => {
        ev.preventDefault()
        if (passwords[login] === password) { 
            onSuccess(login)
        } else {
            setEntryError("Wrong login or password")
        }
    }

    return (
        <form onSubmit={submit}>
            <label> Login
                <input type="text"
                       value={login}
                       onChange={ev => setLogin(ev.target.value)} />
            </label> <br/>
 
            <label> Password
                <input type="password"
                       value={password}
                       onChange={ev => setPassword(ev.target.value)} />
            </label>
 
            <p>{entryError}</p>
            <button type="submit"> Enter </button>
        </form>
    )
}

export default Login
