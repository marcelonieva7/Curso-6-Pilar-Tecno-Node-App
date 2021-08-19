const jwt = require("jsonwebtoken")
const secret = process.env.SECRET_KEY

module.exports = ({user}, res) => {
  if (user) {
    const token = jwt.sign({id: user._id, admin: user?.roles === 'Admin'}, secret, {
      expiresIn: 60 * 60 * 48
    })
    res.json({'token': token})        
    res.redirect('http://localhost:3000/')
  }
  else {
    res.redirect('http://localhost:3000/login')
  } 
}