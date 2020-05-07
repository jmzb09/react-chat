import React from 'react';
import passwords from './passwords.json';

class Login extends React.Component
{
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.state = {
            login : "",
            password : "",
            entryError : "",
        };
    }
 
    submit(ev) {
        ev.preventDefault(); 
        const {login, password} = this.state;
        if (passwords[login] === password) {
            this.props.onSuccess(login);
        } else {
            this.setState({ entryError : "Wrong login or password" });
        }
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <label> Login
                    <input type="text"
                           value={this.state.login}
                           onChange={ ev => this.setState({ login : ev.target.value }) }
                    />
                </label> <br/>

                <label> Password
                    <input type="password"
                           value={this.state.password}
                           onChange={ ev => this.setState({ password : ev.target.value }) }
                    />
                </label> <br/>

                <p> {this.state.entryError} </p> <br/>
                <button type="submit"> Enter </button>
            </form>
        );
    }
}

export default Login;
