const express = require('express');
const router = express.Router();
const Workout = require('../models/workout'); // your model

// READ: list all workouts
router.get('/', async (req, res) => {
  try {
    const workouts = await Workout.find().sort({ date: -1 });
    res.render('workouts', { title: 'Workouts', workouts });
  } catch (err) {
    res.status(500).send('Error loading workouts');
  }
});

// CREATE: add new workout
router.post('/', async (req, res) => {
  try {
    await Workout.create(req.body);
    res.redirect('/workouts');
  } catch (err) {
    res.status(500).send('Error saving workout');
  }
});

// UPDATE: show edit form
router.get('/:id/edit', async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    res.render('editWorkout', { title: 'Edit Workout', workout });
  } catch (err) {
    res.status(500).send('Error loading workout for edit');
  }
});

// UPDATE: handle edit form submission
router.post('/:id/edit', async (req, res) => {
  try {
    await Workout.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/workouts');
  } catch (err) {
    res.status(500).send('Error updating workout');
  }
});

// DELETE: remove workout
router.post('/:id/delete', async (req, res) => {
  try {
    await Workout.findByIdAndDelete(req.params.id);
    res.redirect('/workouts');
  } catch (err) {
    res.status(500).send('Error deleting workout');
  }
});

module.exports = router;