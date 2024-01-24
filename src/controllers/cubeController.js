const express = require("express");
const router = express.Router();
const Cube = require('../models/Cube');

router.get('/details/:cubeId', async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId).lean();

    if (!cube) {
        return res.redirect('/404');
    }

    res.render('details', {...cube});
});

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {
    const {name, description, imageUrl, difficultyLevel} = req.body;

    const cube = new Cube({name, description, imageUrl, difficultyLevel});

    await Cube.create(cube);

    res.redirect('/');
});

module.exports = router;