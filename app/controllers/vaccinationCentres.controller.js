const centersMongoService = require('../services/database/vaccinationCentres.mongo.service')

const getAllCentres = async (req, res) => {
    try {
        const data = await centersMongoService.queryAll()
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

const getCentre = async (req, res) => {
    try {
        const {centreId} = req.params
        const data = await centersMongoService.queryOne(centreId)
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

const deleteCentre = async (req, res) => {
    const badRequest = {
        "code": "bad_request",
        "message": "Invalid Id"
    }
    try {
        const {centreId} = req.params
        const data = await centersMongoService.deleteOne(centreId)
        data ? res.status(200).json(data) : res.status(400).json(badRequest)
    }
    catch {
        const badResponse = {
            "code": "internal_server_error",
            "message": "Something went wrong"
        }
        res.status(500).json(badResponse)
    }
};

const saveCentre = async (req, res) => {
    try {
        const {body} = req
        const centre = await centersMongoService.saveOne(body)
        res.status(200).json({"added": centre})
    }
    catch {
        const badResponse = {
            "code": "internal_server_error",
            "message": "Something went wrong"
        }
        res.status(500).json(badResponse)
    }
};

const updateCentre = async (req, res) => {
    const badRequest = {
        "code": "bad_request",
        "message": "Invalid Id"
    }
    try {
        const { body, params:{centreId}} = req
        const data = await centersMongoService.updateOne(centreId, body)
        data ? res.status(200).json(data) : res.status(400).json(badRequest)
    }
    catch {
        const badResponse = {
            "code": "internal_server_error",
            "message": "Something went wrong"
        }
        res.status(500).json(badResponse)
    }
};

module.exports = { getAllCentres, getCentre, deleteCentre, saveCentre, updateCentre };