const centersMongoService = require('../services/database/vaccinationCentres.mongo.service')
const centreValidation = require('../models/validation/centreValidation.model')
const idValidation = require('../models/validation/documentIdValidation.model')

const invalidId = {
    "code": "bad_request",
    "message": "Invalid Id"
}

const internalError = {
    "code": "internal_server_error",
    "message": "Something went wrong"
}

const getAllCentres = async (req, res) => {
    try {
        const data = await centersMongoService.queryAll()
        res.status(200).json(data)
    }
    catch {
        res.status(500).json(internalError)
    }
};

const getCentre = async (req, res) => {
    try {
        const { centreId } = req.params
        const { error, value } = idValidation.validate(centreId)
        error ? 
            res.status(400).json(error.details) : (
            data = await centersMongoService.queryOne(value),
            data ? res.status(200).json(data) : res.status(400).json(invalidId))
    }
    catch {
        res.status(500).json(internalError)
    }
};

const deleteCentre = async (req, res) => {
    try {
        const { centreId } = req.params
        const { error, value } = idValidation.validate(centreId)
        error ? 
            res.status(400).json(error.details) : (
            data = await centersMongoService.deleteOne(value),
            data ? res.status(200).json(data) : res.status(400).json(invalidId))
    }
    catch {
        res.status(500).json(internalError)
    }
};

const saveCentre = async (req, res) => {
    try {
        const { body } = req
        const { value, error } = centreValidation.validate(body)
        error ? 
            res.status(400).json(error.details) : (
            centre = await centersMongoService.saveOne(value),
            res.status(200).json({"added": centre}))
    }
    catch {
        res.status(500).json(internalError)
    }
};

const updateCentre = async (req, res) => {
    try {
        const { body, params:{centreId} } = req
        const { error:errorId, value:id } = idValidation.validate(centreId)
        const { error, value } = centreValidation.validate(body)
        error || errorId ?
            res.status(400).json(error?.details || errorId?.details) : (
            data = await centersMongoService.updateOne(id, value),
            console.log(data),
            data ? res.status(200).json(data) : res.status(400).json(invalidId))
    }
    catch {
        res.status(500).json(internalError)
    }
};

module.exports = { getAllCentres, getCentre, deleteCentre, saveCentre, updateCentre };