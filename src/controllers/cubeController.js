const express = require("express");
const router = express.Router();

const Cube = require('../models/Cube');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {
    const cube = new Cube(req.body);
    
    res.redirect('/');
});

module.exports = router;