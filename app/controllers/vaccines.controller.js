const { queryAll, queryOne, deleteOne, saveOne, updateOne } = require('../services/database/vaccines.mongo.service')
const vaccineValidation = require('../models/validation/vaccineValidation.model')
const idValidation = require('../models/validation/documentIdValidation.model')

const invalidId = {
    "code": "bad_request",
    "message": "Invalid Id"
}

const internalError = {
    "code": "internal_server_error",
    "message": "Something went wrong"
}

const getAllVaccines = async (req, res) => {
    try {
        const data = await queryAll()
        res.status(200).json(data)
    }
    catch (err) {
        console.log(err)
        res.status(500).json(internalError)
    }
}

const getVaccine = async (req, res) => {
    try {
        const { vaccineId } = req.params
        const validId = await idValidation.validateAsync(vaccineId)
        const data = await queryOne(validId)
        data ? res.status(200).json(data) : res.status(400).json(invalidId)
    }
    catch (err) {
        if (err?.details) {
            console.log(err.details)
            const {message} = err.details[0]
            res.status(400).json({"code": "bad_request", "message": message})
        }
        else {
            console.log(err)
            res.status(500).json(internalError)
        }
    }
}

const deleteVaccine = async (req, res) => {
    try {
        const { vaccineId } = req.params
        const validId = await idValidation.validateAsync(vaccineId)
        const data = await deleteOne(validId)
        data ? res.status(200).json(data) : res.status(400).json(invalidId)
    }
    catch (err) {
        if (err?.details) {
            console.log(err.details)
            const {message} = err.details[0]
            res.status(400).json({"code": "bad_request", "message": message})
        }
        else {
            console.log(err)
            res.status(500).json(internalError)
        }
    }
}

const saveVaccine = async (req, res) => {
    try {
        const { body } = req
        const validBody = await vaccineValidation.validateAsync(body)
        const vaccine = await saveOne(validBody)
        res.status(200).json({"added": vaccine})
    }
    catch (err) {
        if (err?.details) {
            console.log(err.details)
            const {message} = err.details[0]
            res.status(400).json({"code": "bad_request", "message": message})
        }
        else {
            console.log(err)
            res.status(500).json(internalError)
        }
    }
}

const updateVaccine = async (req, res) => {
    try {
        const { body, params:{vaccineId} } = req
        const validBody = await vaccineValidation.validateAsync(body)
        const validId = await idValidation.validateAsync(vaccineId)
        const updated = await updateOne(validId, validBody)
        updated ? res.status(200).json(updated) : res.status(400).json(invalidId)
    }
    catch (err) {
        if (err?.details) {
            console.log(err.details)
            const {message} = err.details[0]
            res.status(400).json({"code": "bad_request", "message": message})
        }
        else {
            console.log(err)
            res.status(500).json(internalError)
        }
    }
}

module.exports = { getAllVaccines, getVaccine, deleteVaccine, saveVaccine, updateVaccine }