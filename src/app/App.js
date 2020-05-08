import React, { useState } from 'react';
import Login from './login/Login';
import Chat from './chat/Chat';

const App = () => {
    const [userName, setUserName] = useState("");
    document.title = userName || "Log in";
    return userName ? <Chat user={userName} logout={ () => setUserName("") } /> : 
            <Login onSuccess={ login => setUserName(login) } />
}

export default App;
