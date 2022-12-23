const router = require('express').Router();
const cubeService = require('../services/cubeService.js');
const accessoryService = require('../services/accessoryService.js');
 
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
    cubeService.create(cube)
    .then(() => {
        // Redirect to page
        res.redirect('/');
    })
    .catch(err => {
        res.status(400).send(err);
    });
});

router.get('/details/:id', async (req, res) => {
    const cube = await cubeService.getOne(req.params.id).lean();
    console.log(cube);
    res.render('details', {cube});
});

router.get('/:cubeId/attach-accessory', async (req, res) => {
    const cube = await cubeService.getOne(req.params.cubeId).lean();
    const accessories = await accessoryService.getAll();
    res.render('accessory/attach', {cube, accessories});
});


module.exports = router;