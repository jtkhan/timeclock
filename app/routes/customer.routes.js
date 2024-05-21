module.exports = app => {
  const customers = require("../controllers/customer.controller.js");

  app.get("/customers/:startDate/:endDate", customers.findAll);

  app.get("/attendance", customers.findAllAttendance);

  app.get("/users", customers.findAllUsers);

  app.get("/user-groups", customers.findAllUserGroups);
};
