var should = require('should');
var app = require('../app.js');
var request = require('supertest')(app);

describe('URL Shortener Microservice', function () {

  it('should show the explanation page if no parameters are given', function (done) {
    request.get('/')
      .expect(200)
      .end(done);
  });

  it('should return a redirect when requesting /12345', function (done) {
    request.get('/12345')
      .expect(302)
      .expect('Location', 'http://freecodecamp.com/news')
      .end(done);
  });

  it('should return redirect JSON object when a valid URL is submitted for shortening', function (done) {
    request.get('/new/http://www.msn.com')
      .expect(201)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        res.body.should.have.property('originalURL').and.be.equal('http://www.msn.com');
        res.body.should.have.property('shortURL');
        done();
      });
  });

  it('should return an error when an invalid URL is submitted for shortening', function (done) {
    request.get('/new/httdfdfp://www.msn.com')
      .expect(201)
      .end(function (err, res) {
        if (err) {
          res.body.should.have.property('Error');
          return done(err);
        }
        done();
      });
  });
  it('should return an error when an invalid shortURL is submitted for redirect', function (done) {
    request.get('/0000')
      .expect(302)
      .end(function (err, res) {
        if (err) {
          res.body.should.have.property('Error');
          return done(err);
        }
        done();
      });
  });

});
