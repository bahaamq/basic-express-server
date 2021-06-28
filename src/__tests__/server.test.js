('use strict');
const supertest = require('supertest');
const {server} = require('../server');
//Accessing app to have the ability to send requests
const request = supertest(server);

describe('API Server', () => {
  it('404 on bad route and method', async () => {
    const response = await request.get('/foo');
    expect(response.status).toEqual(404);
  });
  it('handles errors', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
  });
  it('handles correct routes', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);

  });

  it('check if there is no name in the query request', async () => {
    const result = await request.get('/person');
    expect(result.status).toEqual(500);
  });
  
  it('check correct name and status when sending req', async () => {
    const result = await request.get('/person?name=Bahaa');

    //Supertest savind data in body object
    expect(result.body.name).toEqual('Bahaa');
    expect(result.status).toEqual(200);

  });

});