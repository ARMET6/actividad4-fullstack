// src/app.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Middlewares Globales
app.use(express.json()); // Leer JSON
app.use(cors());         // Permitir peticiones externas

// Configuración de Helmet ajustada para permitir scripts internos y Bootstrap
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        "default-src": ["'self'"],
        "script-src": ["'self'", "'unsafe-inline'"],
        "script-src-attr": ["'unsafe-inline'"], // <--- ESTA ES LA LÍNEA QUE FALTABA
        "style-src": ["'self'", "'unsafe-inline'", "https://cdn.jsdelivr.net"],
        "img-src": ["'self'", "data:"],
        "connect-src": ["'self'"],
        "upgradeInsecureRequests": null, // Importante para localhost
      },
    },
  })
);

app.use(morgan('dev'));  // Logs de consola

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, '../public')));

// Rutas de la API
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Ruta de prueba (Nota: Si entras a '/' verás el index.html automáticamente 
// por el middleware express.static, esta ruta ya no es indispensable)
app.get('/health', (req, res) => {
    res.send('API Actividad 4 Full Stack Funcionando');
});

module.exports = app;