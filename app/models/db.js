const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

var connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  port: dbConfig.port,
  connectionLimit: dbConfig.connectionLimit,
  queueLimit: dbConfig.queueLimit,
  acquireTimeout: dbConfig.acquireTimeout,
  connectTimeout: dbConfig.connectTimeout
});

module.exports = connection;