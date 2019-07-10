var supertest = require('supertest');
var chai = require('chai');
var app = require('../app.js');

global.app = app;
global.expect = chai.expect;
global.request = supertest(app);


// In this test it's expected list of photos from flikr (default without params)
describe('GET /', function() {
    it('returns a list of photos from flikr, default without params', function(done) {
        request.get('/')
            .expect(200)
            .end(function(err, res) {
            	expect(res.body["data"]["photos"]["photo"].length).to.be.at.least(1);
                done(err);
            });
    });
});


// In this test it's expected list of photos from flikr (with params)
describe('GET /?q=art', function() {
    it('returns a list of photos from flikr, default without params', function(done) {
        request.get('/?q=art')
            .expect(200)
            .end(function(err, res) {
            	expect(res.body["data"]["photos"]["photo"].length).to.be.at.least(1);
                done(err);
            });
    });
});


// In this test it's expected list of photos from flikr (with params and page)
describe('GET /?q=art,page=1', function() {
    it('returns a list of photos from flikr, default without params', function(done) {
        request.get('/?q=art&page=1')
            .expect(200)
            .end(function(err, res) {
            	expect(res.body["data"]["photos"]["photo"].length).to.be.at.least(1);
                done(err);
            });
    });
});