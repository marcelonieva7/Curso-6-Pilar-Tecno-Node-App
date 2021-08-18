const JWTstrategy = require('passport-jwt').Strategy
const passport = require('passport')
const ExtractJWT = require('passport-jwt').ExtractJwt
const secret = process.env.SECRET_KEY

passport.use('json-web-token', new JWTstrategy(
  {
    secretOrKey : secret,
    jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken()
  },
  (token, done) => {
    try {
      done(null, token)
    } catch (error) {
      done(error)
    }
  }
))