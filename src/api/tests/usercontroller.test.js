import request from 'supertest';
import app from '../../../server';
import expect from 'expect';

describe('Tests User Controller', function(){
  this.timeout(15000);
  it('Fetches php users', (done) => {
    request(app)
      .get('/api/v1/users')
      .end((err, response) => {
        expect(response.body.message).toBe('Fetched users');
        done();
      });
  });
});