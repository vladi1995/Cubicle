const cubes = require('../db.json');
const Cube = require('../models/cube.js');

exports.create = (cube) => Cube.create(cube);

exports.getOne = (cubeId) => Cube.findById(cubeId);

exports.getAll = async (search = '', fromInput, toInput) => {
    let cubes = await Cube.find().lean();

    // from = Number(fromInput) || 0;
    // to = Number(toInput) || 6;
    
    // const result = cubes.filter(x => x.name.toLowerCase().includes(search?.toLowerCase() || '')) // ? optional
    //                     .filter(x => x.difficultyLevel >= from)
    //                     .filter(x => x.difficultyLevel <= to); 
    // return result;

    return cubes;
}