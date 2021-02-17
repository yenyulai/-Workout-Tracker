const router = require("express").Router();
const Workout = require("../models/model.js").Workout;
const path = require("path");

router.get("/exercise", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});


router.get("/stats", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});


router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkou);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } },{ new: true })
    .then(dbworkout => res.json(dbworkout))
    .catch(err => res.json(err));
});



router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => res.json(err));
});

module.exports = router;