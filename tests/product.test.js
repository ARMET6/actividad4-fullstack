const request = require('supertest');
const app = require('../src/app'); // Asegúrate de que apunte a tu app de Express
const mongoose = require('mongoose');

describe('Pruebas Unitarias - API de Productos', () => {
    
    // Cerramos la conexión a la base de datos después de las pruebas
    afterAll(async () => {
        await mongoose.connection.close();
    });

    it('Debería denegar el acceso (401) si no se envía un token JWT', async () => {
        const res = await request(app).get('/api/products');
        expect(res.statusCode).toEqual(401);
    });

    it('Debería retornar un error de autenticación con un token inválido', async () => {
        const res = await request(app)
            .get('/api/products')
            .set('Authorization', 'Bearer token_falso');
        expect(res.statusCode).toEqual(401);
    });
});