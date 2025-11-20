const express = require('express');
const router = express.Router();
let mongoose = require ('mongoose');

router.get('/', (req, res) => {
  res.render('home', {
    title: 'Home'
  });
});

module.exports = router;