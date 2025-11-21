const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

// Connect to MongoDB
require('./server/configs/db');

// Middleware
app.use(express.urlencoded({ extended: true })); // for form data
app.use(express.static(path.join(__dirname, 'public'))); // serve CSS/images
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'server/views'));

// Routes
const homeRoutes = require('./server/routes/homeRoutes');
const workoutRoutes = require('./server/routes/workoutRoutes');
const entryRoutes = require('./server/routes/entryRoutes');

app.use('/entries', entryRoutes);
app.use('/', homeRoutes);
app.use('/workouts', workoutRoutes);

// Start server
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
