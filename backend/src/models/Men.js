const mongoose = require('mongoose');

const menSchema = new mongoose.Schema({

    brand: {
        type: String,
       
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

const menshoes= mongoose.model("Shoes", menSchema)
module.exports = { menshoes }