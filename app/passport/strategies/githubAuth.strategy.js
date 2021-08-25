const passport = require('passport')
const GitHubStrategy = require('passport-github').Strategy
const userStrategy = require('../strategyCallback')

const githubId = process.env.GITHUB_CLIENT_ID
const githubSecret = process.env.GITHUB_CLIENT_SECRET

passport.use('github', new GitHubStrategy(
  {
    clientID: githubId,
    clientSecret: githubSecret,
    callbackURL: 'https://covidcentre.herokuapp.com/api/auth/github/callback',
  },
  userStrategy,
))
