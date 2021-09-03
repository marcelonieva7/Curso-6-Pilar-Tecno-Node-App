const router = require('express').Router()
// const passport = require('passport')
// const { isAdmin } = require('../../middlewares/authJWT')
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

// router.route('/')
//   .get([passport.authenticate('json-web-token', { session: false })], getAllCentres)
//   .post([passport.authenticate('json-web-token', { session: false }), isAdmin], saveCentre)

// router.route('/:centreId')
//   .get([passport.authenticate('json-web-token', { session: false })], getCentre)
//   .delete([passport.authenticate('json-web-token', { session: false }), isAdmin], deleteCentre)
//   .put([passport.authenticate('json-web-token', { session: false }), isAdmin], updateCentre)

// module.exports = router
