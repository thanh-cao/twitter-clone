const { User } = require('../models');
const catchAsync = require('../utils/catchAsync');

module.exports.renderRegister = (req, res) => {
    res.render('register');
};

module.exports.register = catchAsync(async (req, res) => {
    const { name, username, password } = req.body;
    const user = await User.create({ name, username, password });
    req.login(user, (err) => {
        if (err) {
            console.log(err);
            return res.redirect('/register');
        }
        res.send('User registered successfully');
    });
});