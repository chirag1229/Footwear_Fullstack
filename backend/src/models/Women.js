const mongoose = require('mongoose');

const womenSchema = new mongoose.Schema({

    brand: {
        type: String,
        required: true
    },

    style: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },

    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        default: 0
    }

});

const womenshoes = mongoose.models("Shoes", womenSchema)
module.exports = { womenshoes }