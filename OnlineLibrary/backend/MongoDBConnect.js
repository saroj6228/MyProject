const mongoose = require('mongoose');

// Update your connection string with the correct database name
const uri = 'mongodb://localhost:27017/OnlineLibrary'; // Replace 'OnlineLibrary' with your database name

const connectDB = async () => {
    try {
        // Use only the necessary options for the latest versions of Mongoose
        await mongoose.connect(uri, {
            useNewUrlParser: true,       // Parses MongoDB connection string
            useUnifiedTopology: true,   // Enables the new connection management engine
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error occurred:', error);
        process.exit(1); // Exit the process if MongoDB connection fails
    }
};

connectDB();

module.exports = connectDB;
