const router = require('express').Router()
const statsRouter = require('./api/stats.routes')
const newsRouter = require('./api/news.routes')
const vaccinesRouter = require('./api/vaccines.routes')
const vaccinationCentresRouter = require('./api/vaccinationCentres.routes')
const authRouter = require('./api/auth.routes')

router.get('/', (req, res) => {
  res.redirect('https://documenter.getpostman.com/view/15969040/Tzz7Md4M')
})
router.use('/stats', statsRouter)
router.use('/news', newsRouter)
router.use('/vaccinationCentres', vaccinationCentresRouter)
router.use('/vaccines', vaccinesRouter)
router.use('/auth', authRouter)

module.exports = router
