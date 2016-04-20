var should = require('should');
var app = require('../app.js');
var request = require('supertest')(app);

describe('timeStamp Microservice', function () {
  
  it('should show the explanation page if no parameters are given', function(done) {
    request.get('/')
      .expect(200, done)
  });
  
  it('should return a null timeStamp JSON object if the date is not unix or natural', function(done) {
     request.get('/bob')
      .expect(201)
      .expect('Content-Type', /json/)
      .expect({unix: null, natural: null}, done)

  });

  it('should return a timeStamp JSON object if a natural date is specified', function(done) {
    request.get('/December%2015,%202015')
      .expect(201)
      .expect('Content-Type', /json/)
      .expect({unix: 1450166400000, natural: "December 15, 2015"}, done)
  });

  it('should return a timeStamp JSON object if a unix date is specified', function(done) {
    request.get('/1450137600')
      .expect(201)
      .expect('Content-Type', /json/)
      .expect({unix: 1450137600, natural: "January 17, 1970"}, done)
  });
});
