const express = require('express');
const router = express.Router();

const users = require('../controllers/user.controllers');

router.route('/register')
    .get(users.renderRegister)
    .post(users.register);


module.exports = router;