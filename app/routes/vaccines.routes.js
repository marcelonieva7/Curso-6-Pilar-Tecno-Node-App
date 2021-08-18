const router = require('express').Router()
const { getAllVaccines, getVaccine, deleteVaccine, saveVaccine, updateVaccine } = require('../controllers/vaccines.controller')

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  )
  next()
})

router.route("/")
  .get(getAllVaccines)
  .post(saveVaccine)
;  
router.route("/:vaccineId")
  .get(getVaccine)
  .delete(deleteVaccine)
  .put(updateVaccine)
;

module.exports = router