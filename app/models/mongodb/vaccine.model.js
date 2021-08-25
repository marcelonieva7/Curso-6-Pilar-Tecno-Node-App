const { Schema } = require('mongoose')
const mongoose = require('mongoose')

const vaccineSchema = new Schema({
  name: { type: String, required: true },
  maker: { type: String, required: true },
  country: { type: String, required: true },
  effectiveness: { type: Number, required: true },
  dose: { type: Number, required: true },
  tecnology: { type: String, required: true },
  creation_date: { type: Date, default: Date.now },
})

module.exports = mongoose.model('vaccine', vaccineSchema)
