const knexConnection = require('./knex') // the connection

module.exports = {
  getAll() {
    return knexConnection('user').select('*')
  }
}
