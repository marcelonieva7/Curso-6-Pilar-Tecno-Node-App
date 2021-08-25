/* eslint-disable no-underscore-dangle */
const jwt = require('jsonwebtoken')

const secret = process.env.SECRET_KEY
const deployUrl = process.env.DEPLOY_URL

module.exports = ({ user }, res) => {
  if (user) {
    const token = jwt.sign({ id: user._id, admin: user?.roles === 'Admin' }, secret, {
      expiresIn: 60 * 60 * 48,
    })
    res.cookie('token', token)
    res.redirect(deployUrl)
  } else {
    res.redirect(`${deployUrl}/login`)
  }
}
