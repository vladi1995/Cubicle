const express = require("express");
const router = express.Router();

const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');

router.use('/cube', cubeController);
router.use('/', homeController);

module.exports = router;