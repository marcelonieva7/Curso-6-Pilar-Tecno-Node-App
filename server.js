const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv').config();
const conectDB = require("./app/config/db.config");

const statsRouter = require('./app/routes/stats.routes')
const newsRouter = require('./app/routes/news.routes')
const vaccinesRouter = require('./app/routes/vaccines.routes')
const vaccinationCentresRouter = require('./app/routes/vaccinationCentres.routes')
const authRouter = require('./app/routes/auth.routes')

const passport = require('passport')
const morgan = require("morgan")

const app = express();

require('./app/passport/verifyToken')
require('./app/passport/strategies/googleAuth.strategy')
require('./app/passport/strategies/githubAuth.strategy')

const corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// passport login

app.use(passport.initialize());
app.use(morgan('dev'))

conectDB()

// home route
app.get("/", (req, res) => {
  res.redirect('https://documenter.getpostman.com/view/15969040/Tzz7Md4M')
})

// routes
app.use('/stats', statsRouter)
app.use('/news', newsRouter)
app.use('/vaccinationCentres', vaccinationCentresRouter)
app.use('/vaccines', vaccinesRouter)
app.use('/auth', authRouter)

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
