var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

var Customer = require('./Customer');
// CREATES A NEW Customer
router.post('/', function (req, res) {
    Customer.create({
            name : req.body.name,
            address : req.body.address,
            phone : req.body.phone
        },
        function (err, customer) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(customer);
        });
});

// RETURNS ALL THE customers IN THE DATABASE
router.get('/', function (req, res) {
    Customer.find({}, function (err, customers) {
        if (err) return res.status(500).send("There was a problem finding the customers.");
        res.status(200).send(customers);
    });
});

// GETS A SINGLE customer FROM THE DATABASE
router.get('/:id', function (req, res) {
    Customer.findById(req.params.id, function (err, customer) {
        if (err) return res.status(500).send("There was a problem finding the customer.");
        if (!customer) return res.status(404).send("No customer found.");
        res.status(200).send(customer);
    });
});

// DELETES A customer FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Customer.findByIdAndRemove(req.params.id, function (err, customer) {
        if (err) return res.status(500).send("There was a problem deleting the customer.");
        res.status(200).send("Customer: "+ customer.name +" was deleted.");
    });
});

// UPDATES A SINGLE customer IN THE DATABASE
router.put('/:id', function (req, res) {
    Customer.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, customer) {
        if (err) return res.status(500).send("There was a problem updating the customer.");
        res.status(200).send(customer);
    });
});

module.exports = router;