const express = require('express');
const router = express.Router();
const passport = require('passport');

const users = require('../controllers/user.controllers');

router.get('/', users.getAllUsers);

router.route('/register')
    .get(users.renderRegister)
    .post(users.register);


module.exports = router;