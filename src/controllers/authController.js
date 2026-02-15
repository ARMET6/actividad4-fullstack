    const User = require('../models/User');
    const jwt = require('jsonwebtoken');

    // Generar Token JWT
    const generateToken = (id) => {
        return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
    };

    // Registro de Usuario
    exports.register = async (req, res) => {
        try {
            const { username, password } = req.body;
            const userExists = await User.findOne({ username });

            if (userExists) return res.status(400).json({ message: 'El usuario ya existe' });

            const user = await User.create({ username, password });
            res.status(201).json({
                _id: user._id,
                username: user.username,
                token: generateToken(user._id)
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    // Login de Usuario
    exports.login = async (req, res) => {
        try {
            const { username, password } = req.body;
            const user = await User.findOne({ username });

            if (user && (await user.comparePassword(password))) {
                res.json({
                    _id: user._id,
                    username: user.username,
                    token: generateToken(user._id)
                });
            } else {
                res.status(401).json({ message: 'Credenciales inválidas' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };