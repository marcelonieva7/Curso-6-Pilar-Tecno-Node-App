const Joi = require('joi');

const vaccineSchema = Joi.object({
    name: Joi.string()
        .required()
        .min(4)
        .max(30),
    maker: Joi.string()
        .required()
        .min(4)
        .max(30),
    country: Joi.string()
        .required()
        .min(4)
        .max(15),
    effectiveness: Joi.number()
        .required()
        .integer(),
    dose: Joi.number()
        .required()
        .integer(),
    tecnology: Joi.string()
        .required()
        .min(3)
        .max(20),
})

module.exports = vaccineSchema