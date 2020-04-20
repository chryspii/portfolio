const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const ejs = require('ejs');

require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const passport = require('passport');
const compression = require('compression');

const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');
const educationRouter = require('./routes/educations');
const workRouter = require('./routes/works');
const skillRouter = require('./routes/skills');
const aboutRouter = require('./routes/abouts');
const portfolioRouter = require('./routes/portfolios');

const app = express();

// enable ejs templates to have .html extension
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

// enable gzip compression
app.use(compression());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.use(passport.initialize());
require('./middleware/passport')(passport);

app.use(express.static("client/build"));
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});


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

app.use('/api/users/', userRouter);
app.use('/api/posts/', postRouter);
app.use('/api/educations/', educationRouter);
app.use('/api/works/', workRouter);
app.use('/api/skills/', skillRouter);
app.use('/api/abouts/', aboutRouter);
app.use('/api/portfolios/', portfolioRouter);

module.exports = app;
