const { getAllVaccines, getVaccine, deleteVaccine, saveVaccine, updateVaccine } = require('../controllers/vaccines.controller')

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  
  app.get("/vaccines", getAllVaccines)
  app.get("/vaccines/:vaccineId", getVaccine)
  app.delete("/vaccines/:vaccineId", deleteVaccine)
  app.post("/vaccines/", saveVaccine)
  app.put("/vaccines/:vaccineId", updateVaccine)
};