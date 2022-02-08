const express = require('express');
const router = express.Router();
const tweets = require('../controllers/tweet.controllers');

router.get('/', tweets.getAllTweets);

module.exports = router;