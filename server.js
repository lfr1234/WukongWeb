const express = require('express');
const sql = require('mssql');
const cors = require('cors');
const app = express();

// 数据库配置
const config = {
    user: 'your_username',
    password: 'your_password',
    server: 'localhost',
    database: 'WuKongDB',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

app.use(cors());
app.use(express.json());

// 登录接口
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        await sql.connect(config);
        const result = await sql.query`
            SELECT * FROM Users 
            WHERE Email = ${email} AND Password = ${password}
        `;
        
        if (result.recordset.length > 0) {
            res.json({ success: true, user: result.recordset[0] });
        } else {
            res.status(401).json({ success: false, message: '用户名或密码错误' });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// 注册接口
app.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        await sql.connect(config);
        await sql.query`
            INSERT INTO Users (Username, Email, Password)
            VALUES (${username}, ${email}, ${password})
        `;
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});