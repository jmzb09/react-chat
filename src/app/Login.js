import React from 'react';

const Login = props => {
  // Обработчик клика по кнопке
  const onButtonClick = () => {
    // здесь в последствии должен быть реализован механизм авторизации
    // А пока просто считаем, что мы авторизовались
    props.onSuccess();
  };

  return (
    <div className="container p-5">
      <p>
        Нужно выполнить реализацию формы логина <br/>
        А пока я сюда помещу просто кнопку, по которой можно авторизоваться
      </p>
      <button className="btn btn-primary" onClick={onButtonClick}>Авторизоваться</button>
    </div>
  );
};

export default Login;
