const crypto = require('crypto');
const { User } = require('../models');
const catchAsync = require('../utils/catchAsync');

module.exports.getAllUsers = catchAsync(async (req, res) => {
    const users = await User.findAll();
    res.status(200).json({ users });
});

module.exports.renderRegister = (req, res) => {
    res.render('register');
};

module.exports.register = catchAsync(async (req, res) => {
    const { name, username, password } = req.body;
    const salt = crypto.randomBytes(16);

    crypto.pbkdf2(password, salt, 1000, 32, 'sha512', async (err, hashedPassword) => {
        if (err) return next(err);

        const user = await User.create({ name, username, password: hashedPassword, salt });
        req.login(user, (err) => {
            if (err) return next(err);
            res.send('User registered successfully');
        });
    });
});