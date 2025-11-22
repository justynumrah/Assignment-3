const express = require('express');
const router = express.Router();
const Workout = require('../models/workout'); // ✅ use the same model

// Show entries
router.get('/', async (req, res) => {
  try {
    const workouts = await Workout.find().sort({ Date: -1 });
    res.render('entries', { workouts, title: 'Workout Entries' }); // ✅ pass workouts
  } catch (err) {
    console.error('Error loading entries:', err);
    res.status(500).send('Error loading entries');
  }
});

// Handle form submission (optional — if you want to allow posting from /entries)
router.post('/', async (req, res) => {
  try {
    await Workout.create(req.body);
    res.redirect('/workouts');
  } catch (err) {
    console.error('Error saving entry:', err);
    res.status(500).send('Error saving entry');
  }
});

module.exports = router;