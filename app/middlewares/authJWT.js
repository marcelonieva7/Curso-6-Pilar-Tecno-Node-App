const User = require('../models/mongodb/user.model')

const isAdmin = async (req, res, next) => {
  try {
    const {id} = req.user
    const user = await User.findById(id)
    if (user?.roles === 'Admin') {
      next()
      return
    }
    res.status(403).json({ message: "Require Admin Role!" })
    return
  }
  catch (error) {
    res.status(500).json({ message: error })
    return
  }
}

module.exports = { isAdmin };