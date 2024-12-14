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

// 处理登录
async function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    const success = await auth.login(email, password);
    if (success) {
        alert('登录成功！');
        window.location.href = './HomePage/HomePage.html';
    } else {
        alert('登录失败，请检查邮箱和密码！');
    }
}

// 处理注册
async function handleRegister(event) {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    
    const success = await auth.register(username, email, password);
    if (success) {
        alert('注册成功！');
        // 切换到登录表单
        const wrapper = document.querySelector('.wrapper');
        wrapper.classList.remove('active');
    } else {
        alert('注册失败，请稍后重试！');
    }
}