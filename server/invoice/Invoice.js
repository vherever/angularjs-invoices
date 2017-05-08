var mongoose = require('mongoose');
var InvoiceSchema = new mongoose.Schema({
    discount: Number,
    total: Number
});
mongoose.model('Invoice', InvoiceSchema);

module.exports = mongoose.model('Invoice');