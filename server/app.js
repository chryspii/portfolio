const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var articlesRouter = require('./routes/articles');
var userRouter = require('./routes/user');
var studentRouter = require('./routes/student');

var app = express();

// database connection
const dbConfig = require('./config/database.config.js');
const options = {
    poolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(dbConfig.url, options).then(() => {
    console.log("Successfully connected to the database");  
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
mongoose.Promise = global.Promise;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/user', userRouter);
app.use('/articles', articlesRouter);
app.use('/student', studentRouter);

module.exports = app;
