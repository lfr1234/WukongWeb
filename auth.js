// auth.js
class Authentication {
    constructor() {
        this.isLoggedIn = false;
        this.currentUser = null;
    }

    // 登录方法
    async login(email, password) {
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            
            if (response.ok) {
                const data = await response.json();
                this.isLoggedIn = true;
                this.currentUser = data.user;
                localStorage.setItem('user', JSON.stringify(data.user));
                return true;
            }
            return false;
        } catch (error) {
            console.error('Login error:', error);
            return false;
        }
    }

    // 注册方法
    async register(username, email, password) {
        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            });
            
            return response.ok;
        } catch (error) {
            console.error('Register error:', error);
            return false;
        }
    }
}

// 创建认证实例
const auth = new Authentication();