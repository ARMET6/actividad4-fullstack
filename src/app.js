// src/app.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Middlewares Globales
app.use(express.json()); // Leer JSON
app.use(cors());         // Permitir peticiones externas
app.use(helmet());       // Seguridad headers
app.use(morgan('dev'));  // Logs de consola

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('API Actividad 4 Full Stack Funcionando');
});

module.exports = app;