const Joi = require('joi');

const centreSchema = Joi.object({
    img: Joi.string()
        .uri()
        .required(),
    coordenades: Joi.object({
        lat: Joi.number()
            .required(),
        lon: Joi.number()
            .required()
    }).required(),
    adress: Joi.string()
        .required()
        .min(5)
        .max(30),
    name: Joi.string()
        .required()
        .min(5)
        .max(30)
})

module.exports = centreSchema