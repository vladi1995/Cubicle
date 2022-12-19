const fs = require('fs/promises');
const cubes = require('../db.json');
const path = require('path');

exports.save = (cube) => {
    cubes.push(cube); // Does not save on the server! Data only saves on the array
    let textData = JSON.stringify(cubes, '', 4);
    return fs.writeFile(path.resolve('src', 'db.json'), textData, {encoding: 'utf-8'});
}