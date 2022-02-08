const { Tweet } = require('../models');
const catchAsync = require('../utils/catchAsync');

module.exports.getAllTweets = catchAsync(async (req, res) => {
    const tweets = await Tweet.findAll();
    res.status(200).json({ tweets });
});
