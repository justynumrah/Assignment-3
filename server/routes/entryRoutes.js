const express = require('express');
const router = express.Router();
const Entry = require('../models/entry');

// Show entries + form
router.get('/', async (req, res) => {
  try {
    const entries = await Entry.find().sort({ date: -1 });
    res.render('entries', { entries, title: 'Workout Entries' });
  } catch (err) {
    res.status(500).send('Error loading entries');
  }
});

// Handle form submission
router.post('/', async (req, res) => {
  try {
    await Entry.create({
      title: req.body.title,
      content: req.body.content
    });
    res.redirect('/entries');
  } catch (err) {
    res.status(500).send('Error saving entry');
  }
});

module.exports = router;