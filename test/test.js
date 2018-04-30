const app = require('../server'),
      chai = require('chai'),
      chaiHttp = require('chai-http'),
      expect = chai.expect;
chai.use(chaiHttp);
const url = 'http://localhost:3000',
      requester = chai.request.agent(url);
describe('Tetsinmg Todo API', function(){
    it('should read the totdolist.txt file successfully', function(done){
        requester
            .get('/')
            .end(function (err,res){
                expect(res).to.have.status(200);
                expect(res.text).to.contain('Soccer');
                done();
            })
       
    });
    const todo={data:'Post a todo item at '+ new Date()};
    it('should add new todo item to  the totdolist.txt file successfully', function(done){
        requester
            .post('/')
            .send(todo)
            .end(function (err,res){
                expect(res).to.have.status(201);
                done();
            })
       
    });

});