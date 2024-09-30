const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema({

    brand: {
        type: String,
        required: true
    },

    style: {
        type:String,
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

const shoesModel = mongoose.models("Shoes", shoeSchema)
module.exports = { shoesModel }