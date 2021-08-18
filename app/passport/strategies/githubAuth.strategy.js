const passport = require("passport")
const GitHubStrategy = require('passport-github').Strategy
const githubId = process.env.GITHUB_CLIENT_ID
const githubSecret = process.env.GITHUB_CLIENT_SECRET
const userStrategy = require("../strategyCallback")

passport.use('github', new GitHubStrategy(
  {
    clientID: githubId,
    clientSecret: githubSecret,
    callbackURL: "https://covidcentre.herokuapp.com/auth/github/callback"
  },
  userStrategy
))