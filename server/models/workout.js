// Import the Mongoose library to define and interact with MongoDB schemas
const mongoose = require('mongoose');

// Define the schema for a workout entry
const workoutSchema = new mongoose.Schema({
  WorkoutTitle: String,      // Title of the workout session
  Date: String,              // Date the workout took place
  WorkoutTime: String,       // Duration of the workout
  TargetAreas: String,       // Muscle groups targeted during the workout
  ExerciseList: String,      // List of exercises performed
  Reflection: String         // Personal reflection or notes about the workout
});

// Export the Workout model so it can be used in other parts of the app
module.exports = mongoose.model('Workout', workoutSchema);