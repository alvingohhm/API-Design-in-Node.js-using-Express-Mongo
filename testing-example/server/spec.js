var app = require('./server');
var request = require('supertest');
var chai = require('chai').expect;

describe('[LIONS]', function(){

  // test for GET
  it('should get all lions', function(done) {
    request(app)
      .get('/lions')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, resp) {
        chai(resp.body).to.be.an('array');
        done();
      })
  });

  // test for POST
  it('should create a lion', function(done) {
    request(app)
      .post('/lions')
      .send({
        name: 'Mufasa',
        age: 100,
        pride: 'Evil lions',
        gender:'male'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end(function(err, resp) {
        chai(resp.body).to.be.an('object');
        done();
      })
  });

  // test for DELETE
  it('should delete a lion', function(done) {
    request(app)
      .post('/lions')
      .send({
        name: 'test lion',
        age: 100,
        pride: 'test lion',
        gender:'female'
      })
      .set('Accept', 'application/json')
      .end(function(err, resp) {
        var lion = resp.body;
        request(app)
          .delete('/lions/' + lion.id)
          .end(function(err, resp) {
            chai(resp.body).to.eql(lion);
            done();
          });
      })
  });

  // test for PUT
  it('should update a lion', function(done) {
    request(app)
      .post('/lions')
      .send({
        name: 'test lion',
        age: 100,
        pride: 'test lion',
        gender:'female'
      })
      .set('Accept', 'application/json')
      .end(function(err, resp) {
        var lion = resp.body;
        request(app)
          .put('/lions/' + lion.id)
          .send({
            name: 'new name'
          })
          .end(function(err, resp) {
            chai(resp.body.name).to.equal('new name');
            done();
          });
      })
  });
});