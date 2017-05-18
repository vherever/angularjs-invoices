var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost:27017/invoices_db");
autoIncrement.initialize(connection);

var CustomerSchema = new mongoose.Schema({
    name: String,
    address: String,
    phone: String
});
CustomerSchema.plugin(autoIncrement.plugin, {
    model: 'Customer',
    field: 'id'
});
mongoose.model('Customer', CustomerSchema);

module.exports = mongoose.model('Customer');