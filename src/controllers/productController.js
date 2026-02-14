const Product = require('../models/Product');

// Obtener todos los productos (del usuario autenticado)
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find({ usuario: req.user });
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear Producto
exports.createProduct = async (req, res) => {
    try {
        const { nombre, precio, descripcion, stock } = req.body;
        const product = await Product.create({
            nombre, precio, descripcion, stock,
            usuario: req.user
        });
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar Producto
exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product || product.usuario.toString() !== req.user) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar Producto
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product || product.usuario.toString() !== req.user) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        await product.deleteOne();
        res.json({ message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};