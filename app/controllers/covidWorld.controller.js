const axios = require('axios').default;
// const centersService = require('../services/database/vaccinationCentres.mongo.service')

const getSumary = async (req, res) => {
    try {
        const {data} = await axios.get(`https://corona.lmao.ninja/v2/all`)
        // await centersService.saveCovidWorldCache({
        //     name: "covid centro",
        //     adress: "direccion nnn xxxx",
        //     img: "https://img.com",
        //     coordenades: {
        //         lat: -11.22,
        //         long: 55.98
        //     }
        // })
        // await centersService.queryDataById("60dbb033fc4d30056c148b8c")
        res.status(200).json(data)
    }
    catch {
        const badResponse = {
            "code": "internal_server_error",
            "message": "Something went wrong"
        }
        res.status(500).json(badResponse)
    }
};

module.exports = { getSumary };