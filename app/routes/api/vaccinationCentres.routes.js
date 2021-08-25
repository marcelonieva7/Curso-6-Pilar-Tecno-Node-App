const router = require('express').Router()
const {
  getAllCentres,
  saveCentre,
  getCentre,
  deleteCentre,
  updateCentre,
} = require('../../controllers/vaccinationCentres.controller')

router.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Headers',
    'x-access-token, Origin, Content-Type, Accept',
  )
  next()
})

router.route('/')
  .get(getAllCentres)
  .post(saveCentre)

router.route('/:centreId')
  .get(getCentre)
  .delete(deleteCentre)
  .put(updateCentre)

module.exports = router
