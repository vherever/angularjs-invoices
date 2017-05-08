var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

var InvoiceItem = require('./InvoiceItem');
// CREATES A NEW InvoiceItem
router.post('/', function (req, res) {
    InvoiceItem.create({
            invoice_id : req.body.invoice_id,
            product_id : req.body.product_id,
            quantity : req.body.quantity
        },
        function (err, invoiceItem) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(invoiceItem);
        });
});

// RETURNS ALL THE invoiceItems IN THE DATABASE
router.get('/', function (req, res) {
    InvoiceItem.find({}, function (err, invoiceItems) {
        if (err) return res.status(500).send("There was a problem finding the invoiceItems.");
        res.status(200).send(invoiceItems);
    });
});

// GETS A SINGLE invoiceItem FROM THE DATABASE
router.get('/:id', function (req, res) {
    InvoiceItem.findById(req.params.id, function (err, invoiceItem) {
        if (err) return res.status(500).send("There was a problem finding the invoiceItem.");
        if (!invoiceItem) return res.status(404).send("No invoiceItem found.");
        res.status(200).send(invoiceItem);
    });
});

// DELETES A invoiceItem FROM THE DATABASE
router.delete('/:id', function (req, res) {
    InvoiceItem.findByIdAndRemove(req.params.id, function (err, invoiceItem) {
        if (err) return res.status(500).send("There was a problem deleting the invoiceItem.");
        res.status(200).send("InvoiceItem: "+ invoiceItem._id +" was deleted.");
    });
});

// UPDATES A SINGLE invoiceItem IN THE DATABASE
router.put('/:id', function (req, res) {
    InvoiceItem.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, invoiceItem) {
        if (err) return res.status(500).send("There was a problem updating the invoiceItem.");
        res.status(200).send(invoiceItem);
    });
});

module.exports = router;