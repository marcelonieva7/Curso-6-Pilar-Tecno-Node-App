const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy
const clientId = process.env.GOOGLE_CLIENT_ID
const clientSecret = process.env.GOOGLE_CLIENT_SECRET
const userStrategy = require("../strategyCallback")
const User = require('../../models/mongodb/user.model')

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id)
  done(null, user);
})

passport.use("sign-in-google",new GoogleStrategy(
  {
    "clientID": clientId,
    "clientSecret": clientSecret,
    "callbackURL": "http://localhost:3000/auth/google/callback",
  },
  userStrategy
))
