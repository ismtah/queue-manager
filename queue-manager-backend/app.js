'use strict';

var createError = require('http-errors');
var express = require('express');
var https = require('https');
let fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/usersRoute');
var phishedUsersRouter = require('./routes/phishedUserRoute');
var commandeRouter = require('./routes/commandeRouter');
var entreeRoute = require('./routes/entreeRoute');
var plateRoute = require('./routes/plateRoute');
const dessertRoute = require('./routes/dessertRoute');
var cors = require('cors');

var app = express();

const PORT = 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors())

// set up routers

app.use('/', indexRouter);
commandeRouter(app);
usersRouter(app);
phishedUsersRouter(app);
entreeRoute(app);
plateRoute(app);
dessertRoute(app);

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
  res.json(err);
});

/* https.createServer({
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
}, app).listen(443, () => {
  console.log("server listening on 443")
}) */
app.listen(3000, () => {
  console.log("server listening on 3000")
})


module.exports = app;
