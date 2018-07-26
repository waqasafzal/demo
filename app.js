var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var mainRouter = require('./routes/main');
var usersRouter = require('./routes/users');
var appFunctions = require('./public/javascripts/functions.js');



var app = express();
var connection  = require('express-myconnection'); 
var mysql = require('mysql');

var mustacheExpress = require('mustache-express');
app.engine('html',mustacheExpress());
app.set('view engine', 'html');

app.set('appFunctions', appFunctions); 

app.use(
    
    connection(mysql,{
        
        host: '127.0.0.1',
        user: 'root',
        password : 'iudev',
        port : 3306, //port mysql
        database:'BISMILLAH'
    },'request')
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/main', mainRouter);
app.use('/users', usersRouter);

module.exports = app;
