const Accessory = require('../models/accessory.js');

exports.create = (accessoryData) => Accessory.create(accessoryData);
exports.getAll = () => Accessory.find().lean();