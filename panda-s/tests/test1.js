// const chai = require('chai');
// const expect = chai.expect;
// const nock = require('nock');
// const PandaproxyService = require('../src/app/pandaproxy.service');

// describe('PandaproxyService', () => {
//   let service;

//   beforeEach(() => {
//     service = new PandaproxyService();
//   });

//   it('should fetch shoes', async () => {
//     const dummyShoes = [
//       { id: 1, name: 'Shoe 1' },
//       { id: 2, name: 'Shoe 2' }
//     ];

//     nock('http://localhost:8080')
//       .get('/shoes/')
//       .reply(200, dummyShoes);

//     const shoes = await service.getShoes();
//     expect(shoes).to.deep.equal(dummyShoes);
//   });

//   it('should fetch a shoe by id', async () => {
//     const dummyShoe = { id: 1, name: 'Shoe 1' };

//     nock('http://localhost:8080')
//       .get('/shoes/1')
//       .reply(200, dummyShoe);

//     const shoe = await service.getShoe(1);
//     expect(shoe).to.deep.equal(dummyShoe);
//   });
// });