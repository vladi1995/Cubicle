const express = require("express");
const router = express.Router();
const Accessory = require('../models/Accessory');

router.get('/create', (req, res) => {
    res.render('accessory/create');
});

router.post('/create', async (req, res) => {
    const {name, description, imageUrl} = req.body;

    const accessory = new Accessory({name, description, imageUrl});

    await Accessory.create(accessory);

    res.redirect('/');
});

module.exports = router;