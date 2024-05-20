const sql = require("./db.js");

// constructor
const Customer = function(customer) {
  this.id = customer.id;
  this.gname = customer.gname;
  this.parentid = customer.parentid;
};



Customer.getAll = (startDate, endDate, result) => {
  sql.query(`select a.userid, a.date, a.att_in, a.att_out,gname 
            from attendance a join user b on a.userid=b.userid 
            join user_group c on b.user_group = c.id 
            where date between ${startDate} and ${endDate}`, (err, res) => {
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
