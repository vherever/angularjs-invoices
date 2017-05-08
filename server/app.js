var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/invoices_db');

var UserController = require('./customer/CustomerController');
app.use('/customers', UserController);

var ProductController = require('./product/ProductController');
app.use('/products', ProductController);

var InvoiceController = require('./invoice/InvoiceController');
app.use('/invoices', InvoiceController);

module.exports = app;