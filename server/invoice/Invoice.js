var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost:27017/invoices_db");
autoIncrement.initialize(connection);

var InvoiceSchema = new mongoose.Schema({
    discount: Number,
    total: Number
});
InvoiceSchema.plugin(autoIncrement.plugin, {
    model: 'Invoice',
    field: 'id'
});
mongoose.model('Invoice', InvoiceSchema);

module.exports = mongoose.model('Invoice');