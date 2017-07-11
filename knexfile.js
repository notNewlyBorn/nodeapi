// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql://localhost/testapidb'
  },
  test: {
    client: 'pg',
    connection: 'postgresql://localhost/test-testapidb'
  },
};
