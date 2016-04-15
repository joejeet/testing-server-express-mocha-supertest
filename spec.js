var request = require('supertest');

describe("first test", function () {
  var app;

  beforeEach(function () {
    // remove the cache get the new copy of app
    delete require.cache[require.resolve('./app')];
    app = require('./app.js');
  });

  afterEach(function (done) {
    app.close(done);
  });

  it('responds to / route', function testSlash(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });

  it('404 everything else', function testPath(done) {
    request(app)
      .get('/foo/bar')
      .expect(404, done);
  });

});
