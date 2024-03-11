const chai = require('chai');
const chaiHttp = require('chai-http');
const server = 'https://panda-s.azurewebsites.net/';
chai.use(chaiHttp);
const expect = chai.expect;

describe('Get a list of objects', function() {


    it('Should return an array of objects', function(done) {
      chai.request(server)
        .get('app/shoes')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a('array');
          expect(res.body).to.have.length.above(2);
          done();
        });
    });


    it('The elements in the array should have the expected properties', function(done){
      chai.request(server)
      .get('app/shoes')
      .end((err, res) => {
          if (err) {
              done(err);
          } else {
              expect(res.body).to.be.a('array');
              res.body.forEach(item => {
                  expect(item).to.be.a('object');
                  expect(item).to.have.property('shoeName');
                  expect(item).to.have.property('shoeDescription');
                  expect(item).to.have.property('shoeId');
                  expect(item).to.have.property('shoeSize');
                  expect(item).to.have.property('shoeRating');
                  expect(item).to.have.property('storeId');
                  expect(item).to.have.property('shoePrice');
                  expect(item).to.have.property('shoeQuantity');
              });
              done();
          }
      });
    });

  });