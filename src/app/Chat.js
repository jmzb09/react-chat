import React from 'react';

const Chat = props => {
  const onLogoutButtonClick = () => {
    props.logout();
  };

  return (
    <div className="container p-5">
      <p>
        Здесь будет чат <br/>
        А пока просто кнопка выхода из чата
      </p>
      <button className="btn btn-danger" onClick={onLogoutButtonClick}>Выход</button>
    </div>
  );
};

export default Chat;
