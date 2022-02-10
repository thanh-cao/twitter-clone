const express = require('express');
const router = express.Router();

const users = require('../controllers/user.controllers');

router.get('/', users.getAllUsers);

router.route('/register')
    // .get(users.renderRegister)
    .post(users.register);

router.route('/login')
    // .get(users.renderLogin)
    .post(users.login);

router.get('/logout', users.logout);

module.exports = router;