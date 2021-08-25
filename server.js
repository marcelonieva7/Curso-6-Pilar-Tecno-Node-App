const express = require('express')
const cors = require('cors')
const passport = require('passport')
const morgan = require('morgan')
const path = require('path')
const dotenv = require('dotenv')

dotenv.config()
const conectDB = require('./app/config/db.config')

const app = express()
const apiRouter = require('./app/routes/api.routes')
require('./app/passport/verifyToken')
require('./app/passport/strategies/googleAuth.strategy')
require('./app/passport/strategies/githubAuth.strategy')

const corsOptions = {
  origin: 'http://localhost:3000',
}

app.use(cors(corsOptions))

// parse requests of content-type - application/json
app.use(express.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// passport login
app.use(passport.initialize())

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'build')))

conectDB()

// routes
app.use('/api', apiRouter)
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// set port, listen for requests
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}.`)
})
