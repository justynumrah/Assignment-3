router.get('/', async (req, res) => {
  try {
    const workouts = await Workout.find().sort({ Date: -1 });
    res.render('entries', { workouts, title: 'Workout Entries' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error loading entries');
  }
});