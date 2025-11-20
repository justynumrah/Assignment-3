// app.js
require('dotenv').config(); // Load .env variables

const express = require('express');
const path = require('path');
const mongoose = require('./db'); // Connect to MongoDB
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// MongoDB connection events (optional but helpful)
const mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoDB.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
const Workout = require('./models/workout');

app.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});

app.get('/workouts', async (req, res) => {
  const workouts = await Workout.find();
  res.render('workouts', { title: 'Workouts', workouts });
});

// Add more routes as needed (entries, contact, etc.)

// Start server
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});