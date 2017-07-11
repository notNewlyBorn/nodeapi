const knex = require('../db/knex') // connection

describe('CRUD users',() => {
  before(() => {
    // run migration
    knex.migrate.lates()
    .then(() => {
      return knex.seed.run()
    })
    .then(() => {
      // run seeds
      return knex.seed.run()
    })
  })
})
