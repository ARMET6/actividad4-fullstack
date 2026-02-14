const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre del producto es obligatorio'],
        trim: true
    },
    precio: {
        type: Number,
        required: [true, 'El precio es obligatorio'],
        min: 0
    },
    descripcion: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        default: 0
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Referencia al usuario que creó el producto
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);