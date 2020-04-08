const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const passport = require('passport');

const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.use(passport.initialize());
require('./middleware/passport')(passport);

// database connection
const MONGO_URI = process.env.MONGO_URI;
const options = {
    poolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(MONGO_URI, options).then(() => {
    console.log('Successfully connected to the database');  
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
mongoose.Promise = global.Promise;

app.use('/', indexRouter);
app.use('/api/users/', userRouter);
app.use('/api/posts/', postRouter);

module.exports = app;
