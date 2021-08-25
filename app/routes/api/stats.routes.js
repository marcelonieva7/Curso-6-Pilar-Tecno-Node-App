const passport = require('passport')
const router = require('express').Router()
const { getSumary } = require('../../controllers/covidWorld.controller')
const { getSumary: getCountrySumary } = require('../../controllers/covidByCountry.controller')
const { getVaccinesSumary } = require('../../controllers/covidArg.controller')

router.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Headers',
    'x-access-token, Origin, Content-Type, Accept',
  )
  next()
})

router.get('/world', passport.authenticate('json-web-token', { session: false }), getSumary)
router.get('/world/:country', getCountrySumary)
router.get('/argentina', getVaccinesSumary)

module.exports = router
