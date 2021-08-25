const axios = require('axios').default

const getSumary = async (req, res) => {
  try {
    const { data } = await axios.get('https://corona.lmao.ninja/v2/all')
    res.status(200).json(data)
  } catch {
    const badResponse = {
      code: 'internal_server_error',
      message: 'Something went wrong',
    }
    res.status(500).json(badResponse)
  }
}

module.exports = { getSumary }
