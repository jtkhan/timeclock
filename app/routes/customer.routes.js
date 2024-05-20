module.exports = app => {
    const customers = require("../controllers/customer.controller.js");

    // Retrieve all Customers
    app.get("/customers/:startDate/:endDate", customers.findAll);
  
    
  };