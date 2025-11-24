// Import the Mongoose library to interact with MongoDB
const mongoose = require('mongoose');

// Load environment variables from the .env file
require('dotenv').config();

// Connect to MongoDB using the URI stored in the .env file
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,        // Use the new URL parser
  useUnifiedTopology: true      // Use the new server discovery and monitoring engine
});

// Get the default connection object
const db = mongoose.connection;

// Log any connection errors to the console
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Log a success message once the connection is open
db.once('open', () => {
  console.log('Connected to MongoDB');
});