const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');

const vaccinationCentreSchema = new Schema({
    name: String,
    adress: String,
    img: String,
    coordenades: {
        lat: { type: Number },
        lon: { type: Number }
    },
    creation_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('vaccinationCentre', vaccinationCentreSchema);