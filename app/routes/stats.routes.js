const covidWorld = require('../controllers/covidWorld.controller')
const covidByCountryController = require('../controllers/covidByCountry.controller')
const covidArgController = require('../controllers/covidArg.controller')

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  
  app.get("/stats/world", covidWorld.getSumary)
  app.get("/stats/world/:country", covidByCountryController.getSumary)
  app.get("/stats/argentina", covidArgController.getVaccinesSumary)
};