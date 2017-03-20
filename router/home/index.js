const express = require('express');
const router = express.Router();
// const db = require('../../db/db');

router.get('/', function(res,res){
    res.render('index')
})
