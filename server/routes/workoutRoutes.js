const express = require('express');
const router = express.Router();
const Workout = require('../models/workout'); // create this model next

router.get('/', async (req, res) => {
  const workouts = await Workout.find();
  res.render('workouts', { 
    title: 'workouts', 
    workouts });
});

router.post('/', async (req, res) => {
  await Workout.create(req.body);
  res.redirect('/workouts');
});

module.exports = router;