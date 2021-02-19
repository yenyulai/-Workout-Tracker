const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
{
     name: {
    type: String,
    trim: true,
    required: "Exercisename is Required"
  },

  type: {
    type: String,
    trim: true,
    required: "Type is Required",
  },

  duration: {
    type: Number,
    required: true,
  },

  weight: {
    type: Number,
    required: true,
  },

  reps: {
    type: Number,
    required: true,
  },
  distance: {
    type: Number
  },

  sets:  {
    type: Number,
    required: true,
  }}]
  
});

//----------------combined weight--------------------------
// UserSchema.methods.coolifier = function() {
//   this.username = `${this.username}...the Coolest!`;
//   return this.username;
// };

//-----------------total duration -------------------------
WorkoutSchema.methods.totalDuration = function() {
  this.totalDuration = Workout.aggregate([
    {
      $project: {
        durationTotal:{ $sum: "$exercises.duration"}
      }
    }
  ])
  return this.totalDuration;
};

const Workout = mongoose.model("Workout", WorkoutSchema);

// module.exports = Workout;

module.exports = {
  Workout: Workout
};
