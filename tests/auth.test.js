const request = require('supertest');
const app = require('../src/app');

describe('Pruebas iniciales de conexión', () => {
  it('Debería responder 200 en la ruta raíz', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });
});