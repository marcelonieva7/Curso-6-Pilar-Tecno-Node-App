const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');

const userSchema = new Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    avatar: String,
    roles: { type: String },
    creation_date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('user', userSchema);