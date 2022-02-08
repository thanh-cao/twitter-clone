const { Tweet } = require('../models');
const catchAsync = require('../utils/catchAsync');

module.exports.getAllTweets = catchAsync(async (req, res) => {
    const tweets = await Tweet.findAll();
    res.status(200).json({ tweets });
});

module.exports.renderCreateTweet = (req, res) => {
    if (!req.user) return res.redirect('/users/login');
    res.render('create-tweet');
};

module.exports.createTweet = catchAsync(async (req, res) => {
    const { message } = req.body;
    const userId = req.user.id;
    const tweet = await Tweet.create({ message, userId });
    res.status(200).json({ tweet });
});