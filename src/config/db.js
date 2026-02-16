    const mongoose = require('mongoose');

    const connectDB = async () => {
        try {
            await mongoose.connect(process.env.MONGO_URI, {
                serverSelectionTimeoutMS: 5000, // 5 segundos de timeout
            });
            console.log('MongoDB Conectado Exitosamente');
        } catch (error) {
    console.error('Error conectando a MongoDB:', error.message);
    throw error; // Esto permite que server.js sepa que falló
}
    };

    module.exports = connectDB;