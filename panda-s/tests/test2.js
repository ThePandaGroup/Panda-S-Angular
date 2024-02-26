const chai = require('chai');
const chaiHttp = require('chai-http');
const server = 'http://localhost:8080/';
chai.use(chaiHttp);
const expect = chai.expect;

describe('Get a list of objects', function() {
    it('Should return an array of objects', function(done) {
      chai.request(server)
        .get('app/shoes')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a('array');
          done();
        });
    });
  });