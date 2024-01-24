const express = require("express");
const router = express.Router();

const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');
const accessoryController = require('./controllers/accessoryController');

router.use('/', homeController);
router.use('/cube', cubeController);
router.use('/accessory', accessoryController);

module.exports = router;