//Cấu hình xác thực (authentication), thời gian hết hạn của token
module.exports = {
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES_IN: '1d',
};