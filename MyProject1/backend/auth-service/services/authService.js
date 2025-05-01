const CreateAccount = require('../models/authModels');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.createAccount = async (fullName, email, passWord) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(passWord, salt);

    const newAccount = new CreateAccount({ fullName, email, passWord: hashedPassword });
    await newAccount.save();

    return newAccount;
};

exports.loginAccount = async (email, passWord) => {
    const user = await CreateAccount.findOne({ email });

    if (!user) {
        const error = new Error('Email hoặc mật khẩu không đúng');
        error.statusCode = 401;
        throw error;
    }

    const isMatch = await bcrypt.compare(passWord, user.passWord);
    if (!isMatch) {
        const error = new Error('Email hoặc mật khẩu không đúng');
        error.statusCode = 401;
        throw error;
    }

    const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET || 'your_secret_key',
        { expiresIn: '1d' }
    );

    return {
        token,
        user: {
            id: user._id,
            fullName: user.fullName,
            email: user.email,
        }
    };
};
