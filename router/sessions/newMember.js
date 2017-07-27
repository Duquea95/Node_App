const express = require('express');
const router = express.Router();
const pgp = require('pg-promise')();
// const db = require('../../db/db');
// const db1 = pgp(process.env.DATABASE_URL);

router.get('/new', function(req, res){
  var error = req.flash('error')[0];
  res.render('sessions/new', { 'error': error });
});

router.post('/create', db.login, function(req, res){
  if(res.error) req.flash('error', res.error);
  res.redirect('/');
});

router.get('/logout', db.logout, function(req, res){
  res.redirect('/');
});

module.exports = router;
