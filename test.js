const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./index.js');

chai.should();
chai.use(chaiHttp);

describe('SERVER API', () => {
  it('should return Hello world!!!', () => {
    chai
        .request(server)
        .get('/')
        .end((err, res) => {
          console.log(res.body);
          res.should.have.status(200);
          res.body.should.equal('Hello world!!!')
        })
  });

  it('should return set timezone', () => {
    chai
        .request(server)
        .get('/timezone')
        .end((err, res) => {
          console.log(res.body);
          res.should.have.status(200);
          res.body.should.equal(process.env.TIMEZONE)
        })
  });
});