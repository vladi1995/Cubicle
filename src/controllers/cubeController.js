const router = require('express').Router();
const cubeService = require('../services/cubeService.js');
 
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
    cubeService.save(cube)
    .then(() => {
        // Redirect to page
        res.redirect('/');
    })
    .catch(err => {
        res.status(400).send(err);
    });
});

router.get('/details/:id', (req, res) => {
    res.render('details');
});


module.exports = router;