const cubes = require('../db.json');
const Accessory = require('../models/accessory');
const Cube = require('../models/cube.js');

exports.create = (cube) => Cube.create(cube);

exports.getOne = (cubeId) => Cube.findById(cubeId);
exports.getOneDetailed = (cubeId) => Cube.findById(cubeId).populate('accessories'); //populate with data from another table

exports.getAll = async (search = '', fromInput, toInput) => {
    const from = Number(fromInput) || 0;
    const to = Number(toInput) || 6;

    // let cubes = await Cube.find(
    // {
    //     name: {$regex: new RegExp(search, '')},
    //     difficultyLevel: {$and: [{$gt: from}, {$lt: to}]}
    // }).
    // lean();

    let cubes = await Cube.find(
        {name: {$regex: new RegExp(search, 'i')}}).
    where('difficultyLevel').lte(to).gte(from).lean();

    
    // const result = cubes.filter(x => x.name.toLowerCase().includes(search?.toLowerCase() || '')) // ? optional
    //                     .filter(x => x.difficultyLevel >= from)
    //                     .filter(x => x.difficultyLevel <= to); 
    //return result;
    return cubes;
}

exports.attachAccessory = async (cubeId, accessoryId) => {
    const cube = await Cube.findById(cubeId);
    const accessory = await Accessory.findById(accessoryId); // must NOT be .lean()

    cube.accessories.push(accessory);
    accessory.cubes.push(cube);

    await cube.save();
    await accessory.save();

    return cube;
}