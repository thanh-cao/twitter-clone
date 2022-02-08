const express = require('express');
const router = express.Router();
const tweets = require('../controllers/tweet.controllers');

router.get('/', tweets.getAllTweets);

router.route('/create')
    .get(tweets.renderCreateTweet)
    .post(tweets.createTweet);
    
module.exports = router;