const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');

const vaccinationCentreSchema = new Schema({
    name: { type: String, required: true },
    adress: { type: String, required: true },
    img: { type: String, required: true },
    coordenades: {
        lat: { type: Number, required: true },
        lon: { type: Number, required: true }
    },
    creation_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('vaccinationCentre', vaccinationCentreSchema);