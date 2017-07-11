const request = require('supertest')
const expect = require('chai').expect
const knex = require('../db/knex') // connection

const app = require('../app')

const fixtures = require('./fixtures') // importing a test data to compare with the result

describe('CRUD users',() => {
  before((done) => {
    // run migration
    knex.migrate.latest()
    .then(() => {
      // run seeds
      return knex.seed.run()
    }).then(() => done())
  })

  it('Lists all records', function(done) {
    request(app)
      .get('/api/v1/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a('array')
        console.log(response.body);
        expect(response.body).to.deep.equal(fixtures.users)
        done()
      })
  });
})
