const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    imageUrl: {
        type: String,
        required: true,
        validate: {
            //validator: /^http?/g,
            validator: function() {
                return this.imageUrl.startsWith('http');
            },
            message: 'Image url should start with http/s',
        }
    },

    description: {
        type: String,
        required: true,
        maxLenght: 120,
    }
});

// accessorySchema.path('imageUrl').validate(function() {
//     return this.imageUrl.startsWith('http')
// }, 'Image url must start with http.');

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;