const Customer = require("../models/customer.model.js");

// Retrieve all Customers from the database between specific dates.
exports.findAll = (req, res) => {
  Customer.getAll(req.params.startDate, req.params.endDate, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Employee with id.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Employee with id."
        });
      }
    } else res.send(data);
  });
};

// Retrieve all attendance records
exports.findAllAttendance = (req, res) => {
  Customer.getAllAttendance((err, data) => {
    if (err) {
      res.status(500).send({
        message: "Error retrieving Attendance records."
      });
    } else res.send(data);
  });
};

// Retrieve all user records
exports.findAllUsers = (req, res) => {
  Customer.getAllUsers((err, data) => {
    if (err) {
      res.status(500).send({
        message: "Error retrieving Users."
      });
    } else res.send(data);
  });
};

// Retrieve all user group records
exports.findAllUserGroups = (req, res) => {
  Customer.getAllUserGroups((err, data) => {
    if (err) {
      res.status(500).send({
        message: "Error retrieving User Groups."
      });
    } else res.send(data);
  });
};
