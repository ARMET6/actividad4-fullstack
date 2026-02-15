const jwt = require('jsonwebtoken');

const protect = (req, res, next) => { // <-- Asegúrate de que 'next' esté aquí
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            
            // Guardamos el ID del usuario en el request
            req.user = decoded.id;

            // ¡IMPORTANTE! Llamar a next() para que pase al controlador
            return next(); 
        } catch (error) {
            return res.status(401).json({ message: 'No autorizado, token fallido' });
        }
    }

    if (!token) {
        return res.status(401).json({ message: 'No autorizado, no hay token' });
    }
};

module.exports = protect;