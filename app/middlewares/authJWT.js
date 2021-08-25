const User = require('../models/mongodb/user.model')

const getUserData = async (req, res) => {
  try {
    const { id } = req.user
    const user = await User.findById(id)
    if (user) {
      res.status(200).json({ user })
    } else {
      res.status(400).json({ message: 'Bad request' })
    }
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

const isAdmin = async (req, res, next) => {
  try {
    const { id } = req.user
    const user = await User.findById(id)
    if (user?.roles === 'Admin') {
      next()
      return
    }
    res.status(403).json({ message: 'Require Admin Role!' })
    return
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

module.exports = {
  isAdmin,
  getUserData,
}
