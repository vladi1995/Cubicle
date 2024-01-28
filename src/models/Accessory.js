const { mongoose } = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    imageUrl: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
        maxLength: 50,
    }
});

accessorySchema.path('imageUrl')
    .validate(function() {
        return /http[s]*/.test(this)
    }, 'Image URL must start with http/https');

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;