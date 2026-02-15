const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'El nombre de usuario es obligatorio'],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
        minlength: 6
    }
}, { timestamps: true });

// Middleware de Mongoose: Encriptar contraseña antes de guardar

// src/models/User.js

// Middleware de Mongoose: Encriptar contraseña antes de guardar
userSchema.pre('save', async function() { // Eliminamos 'next'
    // Si la contraseña no ha sido cambiada, salimos de la función
    if (!this.isModified('password')) {
        return; 
    }

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        // Al ser una función async, Mongoose entiende que al terminar puede continuar
    } catch (error) {
        throw error; // Lanzar el error detiene el guardado automáticamente
    }
});

// Método para comparar contraseñas en el login
userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);