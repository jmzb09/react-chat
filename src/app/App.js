import React, { useState } from 'react';
import Login from './Login';
import Chat from './Chat';

const App = () => {
  // Задаем состояние реакт компонента, которое будет говорить о том, авторизован пользователь или нет
  const [isAuthenticated, setIsAuthenticated] = useState(false); // по умолчанию - не авторизован

  // В зависимости от статуса IsAuthenticated будем выводить либо страницу логина, либо чат

  // Это обработчик, который будет выполнен, когда авторизация будет успешной
  // Мы его передаем в компонент Login, чтобы там его вызвать, когда будет введен правильный логин и пароль
  const authSuccess = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  }

  if (!isAuthenticated) {
    return <Login onSuccess={authSuccess} />;
  }

  // Если пользователь авторизован, рисуем чат
  return <Chat logout={logout} />;
};

export default App;
