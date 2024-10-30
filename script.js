const wrapper = document.querySelector('.wrapper');
// 拿到注册表
const register = document.querySelector('.register');
// 拿到登录表
const login = document.querySelector('.login');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    login.classList.add('register-left');
    register.classList.add('register-right');
    login.classList.remove('login-left');
    register.classList.remove('login-right');
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    register.classList.add('login-right');
    login.classList.add('login-left');
    login.classList.remove('register-left');
    register.classList.remove('register-right');
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});