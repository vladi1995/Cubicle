const router = require('express').Router();
const fs = require('fs/promises');
const path = require('path');
const cubes = require('../db.json');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {
    const cube = req.body;
    // Validate
    if (cube.name.length < 2) {
        res.status(400).send('Invalid request!');
        return;
    }
    // Save data
    cubes.push(cube); // Does not save on the server! Data only saves on the array
    fs.writeFile(path.resolve('src', 'db.json'), JSON.stringify(cubes, '', 4), {encoding: 'utf-8'})
    .then(() => {
        // Redirect to page
        res.redirect('/');
    })
    .catch(err => {
        res.status(400).send(err);
    });
});


module.exports = router;