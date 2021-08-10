const app = require('../app.js');
const supertest = require('supertest');
const request = supertest(app);

const data = require('../data.js');

it('gets the dudes endpoint', async () => {
    const response = await request.get('/dudes');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(data);
});

it('gets the dude party endpoint', async () => {
    const response = await request.get('/dudes/1');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(data[0]);
});
