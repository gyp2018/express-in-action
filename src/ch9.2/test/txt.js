const supertest = require('supertest');
const app = require('../app');

describe('plain text response', function() {

  let request;
  beforeEach(function() {
    request = supertest(app)
      .get('/')
      .set('User-Agent', 'my cool browser')
      .set('Accept', 'text/plain');
  });

  it('return a plain text response', function(done) {
    request
      .expect('Content-Type', /text\/plain/)
      .expect(200)
      .end(done);
  });

  it('returns your User agent', function(done) {
    request
      .expect(function(res) {
        if (res.text !== 'my cool browser') {
          throw new Error('Response does not contain User Agent');
        }
      })
      .end(done)
  });
});