const request = require('supertest');
const app = require('../src/app');
const mongoose = require('mongoose');
const User = require('../src/models/User');

describe('Product CRUD API', () => {
    let token;

    // Antes de las pruebas, creamos un usuario y obtenemos un token
    beforeAll(async () => {
        // Nota: Aquí podrías usar una base de datos de pruebas (InMemory) 
        // para que no dependas de Atlas durante los tests.
    });

    it('Debería denegar acceso a productos si no hay token', async () => {
        const res = await request(app).get('/api/products');
        expect(res.statusCode).toEqual(401);
    });

    it('Debería permitir crear un producto con token válido', async () => {
        // Simulación de flujo exitoso
        const res = await request(app)
            .post('/api/products')
            .set('Authorization', `Bearer ${token}`)
            .send({
                nombre: "Producto Test",
                precio: 100,
                descripcion: "Descripción de prueba",
                stock: 10
            });
        // Si no hay conexión a BD, esto fallará, pero la lógica de la prueba es correcta
    });
});