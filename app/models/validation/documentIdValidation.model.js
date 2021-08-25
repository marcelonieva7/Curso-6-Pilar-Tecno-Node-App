const Joi = require('joi')

const idSchema = Joi.string()
  .required()
  .regex(/^[0-9a-fA-F]{24}$/)
  .message('invalid Id')

module.exports = idSchema
