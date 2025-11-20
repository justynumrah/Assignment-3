const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  title: String,
  reps: Number,
  sets: Number
});

module.exports = mongoose.model('Workout', workoutSchema);