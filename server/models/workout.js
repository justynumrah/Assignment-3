const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  WorkoutTitle: String,
  Date: String,
  WorkoutTime: String,
  TargetAreas: String,
  ExerciseList: String,
  Reflection: String
});

module.exports = mongoose.model('Workout', workoutSchema);