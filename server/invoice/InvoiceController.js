var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Invoice = require('./Invoice');
// CREATES A NEW Invoice
router.post('/', function (req, res) {
    Invoice.create({
            customer_id: req.body.customer_id,
            discount : req.body.discount,
            total : req.body.total
        },
        function (err, invoice) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(invoice);
        });
});

// RETURNS ALL THE invoices IN THE DATABASE
router.get('/', function (req, res) {
    Invoice.find({}, function (err, invoices) {
        if (err) return res.status(500).send("There was a problem finding the invoices.");
        res.status(200).send(invoices);
    });
});

// GETS A SINGLE invoice FROM THE DATABASE
router.get('/:id', function (req, res) {
    Invoice.findById(req.params.id, function (err, invoice) {
        if (err) return res.status(500).send("There was a problem finding the invoice.");
        if (!invoice) return res.status(404).send("No invoice found.");
        res.status(200).send(invoice);
    });
});

// DELETES A invoice FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Invoice.findByIdAndRemove(req.params.id, function (err, invoice) {
        if (err) return res.status(500).send("There was a problem deleting the invoice.");
        res.status(200).send("Invoice: "+ invoice._id +" was deleted.");
    });
});

// UPDATES A SINGLE invoice IN THE DATABASE
router.put('/:id', function (req, res) {
    Invoice.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, invoice) {
        if (err) return res.status(500).send("There was a problem updating the invoice.");
        res.status(200).send(invoice);
    });
});

module.exports = router;