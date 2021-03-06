const crypto = require('crypto');
const { User } = require('../models');
const catchAsync = require('../utils/catchAsync');
const passport = require('passport');

module.exports.getAllUsers = catchAsync(async (req, res) => {
    const users = await User.findAll();
    res.status(200).json({ users });
});

module.exports.register = catchAsync(async (req, res) => {
    const { name, username, password } = req.body;
    const salt = crypto.randomBytes(16);

    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) return res.status(400).json({ error: 'User already exists' });

    crypto.pbkdf2(password, salt, 1000, 32, 'sha512', async (err, hashedPassword) => {
        if (err) return next(err);

        const user = await User.create({ name, username, password: hashedPassword, salt });
        req.login(user, (err) => {
            if (err) return next(err);
            res.status(200).json(user);
        });
    });
});

module.exports.login = (req, res) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res.status(500).json({ error: 'Something went wrong' });
        }
        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        };

        req.login(user, (err) => {
            if (err) {
                return res.status(500).json({ error: 'Something went wrong' });
            };
            req.session.user = user;
            res.status(200).json(user);
        });

    })(req, res);
};

module.exports.logout = (req, res) => {
    req.logout();
    res.send('User logged out successfully');
};

module.exports.authenticateUser = (req, res) => {
    if (req.isAuthenticated()) {
        res.status(200).json(req.session.user);
    } else {
        res.status(401).json({ error: 'User not authenticated' });
    }
}