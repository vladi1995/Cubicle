const express = require("express");
const router = express.Router();
const Cube = require('../models/Cube');
const Accessory = require("../models/Accessory");

router.get('/details/:cubeId', async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId).populate('accessories').lean();

    if (!cube) {
        return res.redirect('/404');
    }

    res.render('details', {...cube});
});

router.get('/create', (req, res) => {
    res.render('cube/create');
});

router.post('/create', async (req, res) => {
    const {name, description, imageUrl, difficultyLevel} = req.body;

    const cube = new Cube({name, description, imageUrl, difficultyLevel});

    await Cube.create(cube);

    res.redirect('/');
});

router.get('/attach/:cubeId', async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId).lean();

    const accessories = await Accessory.find({_id: {$nin: cube.accessories}}).lean();

    res.render('cube/attach', {cube, accessories});
});

router.post('/attach/:cubeId', async (req, res) => {
    const accessoryId = req.body.accessory;

    const cube = await Cube.findById(req.params.cubeId);

    cube.accessories.push(accessoryId);

    await cube.save();
    
    res.redirect(`/cube/details/${req.params.cubeId}`);
});

module.exports = router;