const router = require('express').Router()
const { getTweets } = require('../controllers/covidTweets.controller')
const { isAdmin } = require('../middlewares/authJWT')
const passport = require('passport')

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  )
  next()
})
  
router.get("/tweets", [passport.authenticate('json-web-token', { session : false }), isAdmin], getTweets)

module.exports = router