const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'westside',
  password: 'umaushan',
  database: 'westsidenode',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
module.exports = pool;
