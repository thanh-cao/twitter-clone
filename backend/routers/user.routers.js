const express = require('express');
const router = express.Router();
const passport = require('passport');

const users = require('../controllers/user.controllers');

router.get('/', users.getAllUsers);

router.route('/register')
    .get(users.renderRegister)
    .post(users.register);

router.route('/login')
    .get(users.renderLogin)
    .post(passport.authenticate('local', { failureRedirect: '/users/login', failureMessage: true }), users.login);

router.get('/logout', users.logout);

module.exports = router;