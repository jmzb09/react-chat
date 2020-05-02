import passwords from './passwords.json';

const getLogin = () => document.getElementById("login").value;
const getPassword = () => document.getElementById("password").value;

const showError = () => document.getElementById("entry_error").style.visibility = "visible";

const logUser = userName => window.location = `../chat.html#${userName}`;

const checkLogin = login => passwords[login] === getPassword() ? logUser(login) : showError();
const register = () => checkLogin(getLogin());

window.onload = () => {
    document.forms[0].addEventListener("submit", () => {register(); return false}, false);
}
