/* eslint-disable no-console */
const db = require('../models/mongodb')

const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASSWORD
const dbName = 'myFirstDatabase'
const dbUri = `mongodb+srv://${dbUser}:${dbPass}@cursonode.vxobl.mongodb.net/${dbName}?retryWrites=true&w=majority`

const mongooseOptions = { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }

const conectDB = async () => {
  try {
    await db.mongoose.connect(dbUri, mongooseOptions)
    console.log('Successfully connect to MongoDB')
  } catch (err) {
    console.error('Connection error', err)
    process.exit()
  }
}

module.exports = conectDB
