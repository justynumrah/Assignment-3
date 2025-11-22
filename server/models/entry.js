const express = require('express');
const router = express.Router();
const Workout = require('../models/workout');

// Show entries (same data, different view)
router.get('/', async (req, res) => {
  try {
    const workouts = await Workout.find().sort({ Date: -1 });
    res.render('entries', { title: 'Workout Entries', workouts });
  } catch (err) {
    res.status(500).send('Error loading entries');
  }
});

module.exports = router;