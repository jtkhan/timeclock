const sql = require("./db.js");

// constructor
const Customer = function(customer) {
  this.id = customer.id;
  this.gname = customer.gname;
  this.parentid = customer.parentid;
};

// Get all columns from the attendance table
Customer.getAllAttendance = (result) => {
  sql.query("SELECT * FROM attendance", (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }
    console.log("Attendance: ", res);
    result(null, res);
  });
};

// Get all columns from the user table
Customer.getAllUsers = (result) => {
  sql.query("SELECT * FROM user", (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }
    console.log("Users: ", res);
    result(null, res);
  });
};

// Get all columns from the user_group table
Customer.getAllUserGroups = (result) => {
  sql.query("SELECT * FROM user_group", (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }
    console.log("User Groups: ", res);
    result(null, res);
  });
};

// Get all employees between startDate and endDate
Customer.getAll = (startDate, endDate, result) => {
  sql.query(`SELECT a.userid, a.date, a.att_in, a.att_out, gname 
             FROM attendance a 
             JOIN user b ON a.userid = b.userid 
             JOIN user_group c ON b.user_group = c.id 
             WHERE a.date BETWEEN ? AND ?`, [startDate, endDate], (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }
    console.log("Employees: ", res);
    result(null, res);
  });
};

module.exports = Customer;
