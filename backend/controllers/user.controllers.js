const { User } = require('../models');

module.exports.renderRegister = (req, res) => {
    res.render('register');
};
