var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/user-api');

var UserController = require('./customer/CustomerController');
app.use('/customers', UserController);

module.exports = app;