const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv').config();
const dbConfig = require("./app/config/db.config");

const app = express();

const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models/mongodb");

db.mongoose
  .connect(dbConfig.dbUri, dbConfig.mongooseOptions)
  .then(() => {
    console.log("Successfully connect to MongoDB");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// home route
app.get("/", (req, res) => {
  res.redirect('https://documenter.getpostman.com/view/15969040/Tzz7Md4M')
})

// routes
require('./app/routes/stats.routes')(app);
require('./app/routes/news.routes')(app);
require('./app/routes/vaccinationCentres.routes.js')(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
