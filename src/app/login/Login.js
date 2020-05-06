import React from 'react';
import passwords from './passwords.json';

class Login extends React.Component
{
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.state = { error_message : "" };
    }
 
    submit(ev) {
        ev.preventDefault(); 
        const {_login, _password} = this.refs;
        if (passwords[_login.value] === _password.value) {
            this.props.onSuccess(_login.value);
        } else {
            this.setState({ error_message : "Wrong login or password" });
        }
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <label> Login <input type="text" ref="_login" /> </label> <br/>
                <label> Password <input type="password" ref="_password" /> </label> <br/>
                <p> {this.state.error_message} </p> <br/>
                <button type="submit"> Enter </button>
            </form>
        );
    }
}

export default Login;
