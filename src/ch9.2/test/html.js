const supertest = require('supertest');
const cheerio = require('cheerio');
const app = require('../app');

describe('html response', function() {

  let request;
  beforeEach(function() {
    request = supertest(app)
      .get('/')
      .set('User-Agent', 'a cool browser')
      .set('Accept', 'text/html');
  });

  it('returns an HTML response', function(done) {
    request
      .expect('Content-Type', /html/)
      .expect(200)
      .end(done);
  });

  it('returns your User Agent', function(done) {
    request
      .expect(function(res) {
        const htmlResponse = res.text;
        const $ = cheerio.load(htmlResponse);
        const userAgent = $('.user-agent').html().trim();
        if (userAgent !== 'a cool browser') {
          throw new Error('User Agent not found');
        }
      })
      .end(done);
  });
});
