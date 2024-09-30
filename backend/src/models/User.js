const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    Username: {
        type: String,
        required: true,
        unique : true
    },

    email: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true
    },

});

const userModel = mongoose.model("User", userSchema)
module.exports = { userModel }