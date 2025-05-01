const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const dbURI = process.env.MONGODB_URI
        await mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Kết nối MongoDB thành công');
    } catch (error) {
        console.log('Lỗi kết nối MongoDB: ', error);
        process.exit(1); //Thoát ứng dụng nếu kết nối không thành công
    }
};

module.exports = connectDB;