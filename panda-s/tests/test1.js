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


  it('Should have the correct properties and values for Shoe with ID 1', function(done) {
    chai.request(server)
      .get('app/shoes/1')
      .end(function(err, res) {
  
        expect(res.body).to.have.property('shoeName', 'Geo shoe');
        expect(res.body).to.have.property('shoeDescription', 'A shoe that prevents you from getting lost.');
        expect(res.body).to.have.property('shoeId', '1');
        expect(res.body).to.have.property('shoeSize', 5.5);
        expect(res.body).to.have.property('shoeRating', 4.5);
        expect(res.body).to.have.property('storeId', '181818');
        expect(res.body).to.have.property('shoePrice', 39.99);
        expect(res.body).to.have.property('shoeQuantity', 3);
        done();
      });
  });

});