const { mongoose, Types } = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
        maxLength: 50,
    },

    imageUrl: {
        type: String,
        required: true,
    },

    difficultyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 6,
    },

    accessories: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Accessory'
        }
    ]
});

cubeSchema.path('imageUrl')
    .validate(function() {
        return /http[s]*/.test(this)
    }, 'Image URL must start with http/https');

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;