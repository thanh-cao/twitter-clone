const express = require('express');
const router = express.Router();
const tweets = require('../controllers/tweet.controllers');
const { isLoggedIn } = require('../middlewares');

router.get('/', tweets.getAllTweets);


router.route('/create')
    .get(isLoggedIn, tweets.renderCreateTweet)
    .post(isLoggedIn, tweets.createTweet);

router.get('/:username', tweets.getTweetByUsername);

module.exports = router;