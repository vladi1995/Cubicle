const express = require("express");
const router = express.Router();
const db = require('../db.json');
const Cube = require('../models/Cube');

router.get('/details/:cubeId', (req, res) => {
    const cube = db.cubes.find(el => el.id === Number(req.params.cubeId));

    if (!cube) {
        return res.redirect('/404');
    }

    res.render('details', {...cube});
});

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {
    const {name, description, imageUrl, difficultyLevel} = req.body;

    const cube = new Cube(name, description, imageUrl, difficultyLevel);

    cube.save();

    res.redirect('/');
});

module.exports = router;