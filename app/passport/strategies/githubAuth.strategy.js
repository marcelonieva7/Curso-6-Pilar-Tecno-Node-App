const passport = require('passport')
const GitHubStrategy = require('passport-github').Strategy
const userStrategyAdmin = require('../strategyCallbackAdmin')

const clientID = process.env.GITHUB_CLIENT_ID
const clientSecret = process.env.GITHUB_CLIENT_SECRET

passport.use('github', new GitHubStrategy(
  {
    clientID,
    clientSecret,
    callbackURL: 'https://covidcentre.herokuapp.com/api/auth/github/callback',
  },
  userStrategyAdmin,
))
