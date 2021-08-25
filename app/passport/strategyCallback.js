const User = require('../models/mongodb/user.model')

module.exports = async (accessToken, refreshToken, profile, done) => {
  const { id, displayName, photos } = profile
  const user = await User.findById(id)
  if (user) {
    done(null, user)
  } else {
    const userData = {
      _id: id,
      name: displayName,
      avatar: photos[0].value,
      // "roles": 'Admin'
    }
    const newUser = new User(userData)
    await newUser.save()
    done(null, userData)
  }
}
