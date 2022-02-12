module.exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) return next();
    res.status(401).json({ error: 'User is not logged in.' });
}