const VCcontroller = require('../controllers/vaccinationCentres.controller')

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  
  app.get("/vaccinationCentres", VCcontroller.getAllCentres)
  app.get("/vaccinationCentres/:centreId", VCcontroller.getCentre)
  app.delete("/vaccinationCentres/:centreId", VCcontroller.deleteCentre)
  app.post("/vaccinationCentres/", VCcontroller.saveCentre)
  app.put("/vaccinationCentres/:centreId", VCcontroller.updateCentre)
};