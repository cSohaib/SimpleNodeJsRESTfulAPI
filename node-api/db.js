const parameters = require('./parameters');
const Pool = require('pg').Pool
const pool = new Pool({
  user: parameters.db.user,
  host: parameters.db.host,
  database: parameters.db.database,
  password: parameters.db.password,
  port: parameters.db.port,
})

module.exports = pool;