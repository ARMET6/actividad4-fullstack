const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000, // 5 segundos de timeout
        });
        console.log('MongoDB Conectado Exitosamente');
    } catch (error) {
        console.error('Error conectando a MongoDB:', error.message);
        // No cerramos el proceso para que nodemon no crashee infinitamente
    }
};

module.exports = connectDB;