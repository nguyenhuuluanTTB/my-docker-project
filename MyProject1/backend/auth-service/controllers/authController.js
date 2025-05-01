const authService = require('../services/authService');

exports.CreateAccount = async (req, res) => {
    try {
        const { fullName, email, passWord } = req.body;
        console.log('Dữ liệu nhận được từ frontend: ', req.body);

        const newAccount = await authService.createAccount(fullName, email, passWord);
        console.log('Tài khoản người dùng đã được lưu vào DB: ', newAccount);

        res.status(201).json({ message: 'Tạo tài khoản thành công!', account: newAccount });
    } catch (error) {
        console.error('Lỗi tạo tài khoản:', error);
        res.status(500).json({ error: 'Đã có lỗi xảy ra' });
    }
};

exports.LoginAccount = async (req, res) => {
    try {
        const { email, passWord } = req.body;
        console.log('Dữ liệu đăng nhập nhận được: ', req.body);

        const result = await authService.loginAccount(email, passWord);

        res.status(200).json({
            message: 'Đăng nhập thành công!',
            token: result.token,
            user: result.user
        });
    } catch (error) {
        console.error('Lỗi đăng nhập:', error.message);
        res.status(error.statusCode || 500).json({ error: error.message || 'Đã có lỗi xảy ra khi đăng nhập' });
    }
};

//Hàm gửi một tin nhắn Hello World về frontend
exports.SayHello = async (req, res) => {
    res.status(200).json({ message: 'Hello World' });
}
