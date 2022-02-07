if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

// import packages
const express = require('express');
const ejsMate = require('ejs-mate');
var createError = require('http-errors');
const path = require('path');
const db = require('./models');

// import routers
const userRouters = require('./routers/user.routers');

const app = express();
db.initDB(); // testing database connection

// set up middleware and routers
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/users', userRouters);

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