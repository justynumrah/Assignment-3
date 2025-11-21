const mongoose = require('../configs/db');

const workoutSchema = new mongoose.Schema({
  entryNum: Number,
  title: String,
  message: String,
  date: Number,
  month: Number,
  year: Number
});

module.exports = mongoose.model('Workout', workoutSchema);