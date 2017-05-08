var mongoose = require('mongoose');
var InvoiceItemSchema = new mongoose.Schema({
    invoice_id: Number,
    product_id: Number,
    quantity: Number
});
mongoose.model('InvoiceItem', InvoiceItemSchema);

module.exports = mongoose.model('InvoiceItem');