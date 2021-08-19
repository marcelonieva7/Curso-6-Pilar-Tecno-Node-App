const router = require('express').Router()
const passport = require("passport")
const generateToken = require("../middlewares/generateToken")

const options = {
  scope: ['https://www.googleapis.com/auth/plus.login'],
  session: false 
}

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  )
  next()
})
router.get("/google", passport.authenticate("sign-in-google", options))
router.get("/google/callback", passport.authenticate("sign-in-google", options), generateToken)

router.get('/github',passport.authenticate('github', { session: false}))
router.get('/github/callback', passport.authenticate('github', { session: false }), generateToken)

module.exports = router