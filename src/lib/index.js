// aqui exportaras las funciones que necesites
const loginButton = document.getElementById('login-button');
const registerButton = document.getElementById('register-button');


//function open or close sections
const showSection = id => document.getElementById(id).classList.remove('hide');
const hideSection = id => document.getElementById(id).classList.add('hide');

//functions to change sections
loginButton.addEventListener("click", goinglogin);

const goinglogin = () => {
    hideSection('welcomepage');
    showSection('login');
}