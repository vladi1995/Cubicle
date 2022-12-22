const router = require('express').Router();
const cubeService = require('../services/cubeService.js');

router.get('/', async (req, res) => {
    let queryString = req.query; // Takes query from url
    let {search, from, to} = queryString;

    const cubes = await cubeService.getAll(search, from, to);
    res.render('index', {cubes,search, from, to});
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;