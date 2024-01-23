const express = require("express");
const router = express.Router();
const db = require('../db.json');

router.get('/', (req, res) => {
    const {search, from, to} = req.query;

    let cubes = db.cubes;

    if (search) {
        cubes = cubes.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (from) {
        cubes = cubes.filter(cube => Number(cube.difficultyLevel) >= Number(from));
    }

    if (to) {
        cubes = cubes.filter(cube => Number(cube.difficultyLevel) <= Number(to));
    }

    res.render('index', { cubes, search, from, to });
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/404', (req, res) => {
    res.render('404');
});

module.exports = router;