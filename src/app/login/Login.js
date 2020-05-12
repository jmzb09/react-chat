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
        <form className="form-signin" onSubmit={submit}>
            <h1 className="h1 mb-4 text-center">{"Sign in"}</h1>
            <label htmlFor="inputLogin" className="sr-only"> Login </label>
            <input type="text"
                   id="inputLogin"
                   placeholder="Login"
                   className="form-control"
                   value={login}
                   onChange={ev => setLogin(ev.target.value)} />
 
            <label htmlFor="inputPassword" className="sr-only"> Password </label>
            <input type="password"
                   id="inputPassword"
                   className="form-control"
                   placeholder="Password"
                   value={password}
                   onChange={ev => setPassword(ev.target.value)} />
 
            <p className="text-center text-danger">{entryError}</p>
            <button type="submit" className="btn btn-lg btn-primary btn-block"> Enter </button>
            <p className="mt-5 mb-3 text-muted text-center">&copy; May 2020 </p>
        </form>
    )
}

export default Login
