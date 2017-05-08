var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, '../public')));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/invoices_db');

var UserController = require('./customer/CustomerController');
app.use('/customers', UserController);

var ProductController = require('./product/ProductController');
app.use('/products', ProductController);

var InvoiceController = require('./invoice/InvoiceController');
app.use('/invoices', InvoiceController);

var InvoiceItemController = require('./invoiceItem/InvoiceItemController');
app.use('/invoices/:invoice_id/items', InvoiceItemController);

// Redirect all non api requests to the index
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

module.exports = app;