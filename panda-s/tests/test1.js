const chai = require('chai');
const chaiHttp = require('chai-http');
const server = 'http://localhost:8080/';
chai.use(chaiHttp);
const expect = chai.expect;

describe('Get a single object', function() {
  it('Should return an object', function(done) {
    chai.request(server)
      .get('app/shoes/1')
      .end(function(err, res) {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        done();
      });
  });
});