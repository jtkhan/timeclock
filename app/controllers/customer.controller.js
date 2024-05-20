
const Customer = require("../models/customer.model.js");


// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  Customer.getAll(req.params.startDate, req.params.endDate,(err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Employee with id.`
        });
      } else {
        res.status(500).send({
          message: "Error Retrieving Employee with id " 
        });
      }
    } else res.send(data);
  });
};


