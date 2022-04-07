const mongoose = require('mongoose');

var Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: false
    },
    socketId: {
        type: String,
        required: false
    }
})

let userModel = mongoose.model('users',userSchema);

module.exports = userModel