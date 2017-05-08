var mongoose = require('mongoose');
var CustomerSchema = new mongoose.Schema({
    name: String,
    address: String,
    phone: String
});
mongoose.model('Customer', CustomerSchema);

module.exports = mongoose.model('Customer');