var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var roadRouter = require('./routes/road');
var bmxRouter = require('./routes/bmx');
var accesoriosRouter = require('./routes/accesorios');
var urbRouter = require('./routes/urb');
var mtbRouter = require('./routes/mtb');




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);




app.use('/road', roadRouter);
app.use('/bmx', bmxRouter);
app.use('/accesorios', accesoriosRouter);
app.use('/urb', urbRouter);
app.use('/mtb', mtbRouter);




 app.get('/testeo' , function (req,res){
          
            res.send ('texto para testear')


 })

 app.get('/mtb' , function (req,res){
          
  res.send ('Listado de bicicletas mountainbike')


})

app.get('/bmx' , function (req,res){
          
  res.send ('Listado de bicicletas estilo BMX')


})

app.get('/accesorios' , function (req,res){
          
  res.send ('Listado de accesorios para bicicletas')


})

app.get('/road' , function (req,res){
          
  res.send ('Listado de bicicletas de ruta')


})

app.get('/urb' , function (req,res){
          
  res.send ('Listado de bicicletas urbanas')


})















// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
