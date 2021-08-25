const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const userStrategy = require('../strategyCallback')
const UserModel = require('../../models/mongodb/user.model')

const clientID = process.env.GOOGLE_CLIENT_ID
const clientSecret = process.env.GOOGLE_CLIENT_SECRET
const callbackURL = `${process.env.BASE_URL}/api/auth/google/callback`

passport.serializeUser((user, done) => {
  // @ts-ignore
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  const user = await UserModel.findById(id)
  done(null, user)
})

passport.use('sign-in-google', new GoogleStrategy(
  {
    clientID,
    clientSecret,
    callbackURL,
  },
  userStrategy,
))
