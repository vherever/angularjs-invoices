var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost:27017/invoices_db");
autoIncrement.initialize(connection);

var ProductSchema = new mongoose.Schema({
    name: String,
    price: Number
});
ProductSchema.plugin(autoIncrement.plugin, {
    model: 'Product',
    field: 'id'
});
mongoose.model('Product', ProductSchema);

module.exports = mongoose.model('Product');