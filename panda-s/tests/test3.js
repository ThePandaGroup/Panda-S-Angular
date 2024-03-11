const chai = require('chai');
const chaiHttp = require('chai-http');
const server = 'https://panda-s.azurewebsites.net/';
chai.use(chaiHttp);
const expect = chai.expect;

describe('POST /app/buyers/cart/:shoeId', function() {
    let agent = chai.request.agent(server);
    let cookie = null;

    before(function(done) {
        agent
            .get('/app/login') // replace with your login route
            .end(function(err, res) {
                expect(res).to.have.cookie('sessionid');
                // The `agent` now has the sessionid cookie saved, and will send it
                // back to the server in the next request:
                cookie = res.headers['set-cookie'];
                done();
            });
    });

    it('Should return 200 and the updated cart when the request is valid', function(done) {
        agent
            .post('app/buyers/cart/1') // replace 1 with actual shoeId
            .set('Cookie', cookie)
            .end(function(err, res) {
                expect(res).to.have.status(200);
                // Add more assertions based on your application's logic
                done();
            });
    });

    // Add more test cases as needed

    after(function () {
        // After all tests, close the agent
        agent.close();
    });
});