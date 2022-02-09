if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

// import packages
const express = require('express');
const ejsMate = require('ejs-mate');
const createError = require('http-errors');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const crypto = require('crypto');
const session = require('express-session');
const cors = require('cors');
const path = require('path');

const db = require('./models');
const User = db.User;

// import routers
const userRouters = require('./routers/user.routers');
const tweetRouters = require('./routers/tweet.routers');

const app = express();
db.initDB(); // testing database connection

// set up middleware and routers
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({origin: "http://localhost:3001",credentials: true }));

const sessionConfig = {
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // expires in 7 days
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
};

app.use(session(sessionConfig));

// set up passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(
    function verify(username, password, done) {
        User.findOne({ where: { username: username } })
            .then(user => {
                if (!user) return done(null, false, { message: 'Incorrect username or password.' });

                crypto.pbkdf2(password, user.salt, 1000, 32, 'sha512', function (err, hashedPassword) {
                    if (err) return done(err);
                    if (!crypto.timingSafeEqual(user.password, hashedPassword)) {
                        return done(null, false, { message: 'Incorrect username or password.' });
                    };
                    return done(null, user);
                });
            });
    }
));
passport.serializeUser(function (user, done) {
    done(null, user.id);
});
passport.deserializeUser(function (id, done) {
    User.findByPk(id).then(user => done(null, user));
});


app.use('/users', userRouters);
app.use('/tweets', tweetRouters);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));