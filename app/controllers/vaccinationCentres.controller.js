/* eslint-disable no-console */
const {
  queryAll,
  queryOne,
  deleteOne,
  saveOne,
  updateOne,
} = require('../services/database/vaccinationCentres.mongo.service')
const centreValidation = require('../models/validation/centreValidation.model')
const idValidation = require('../models/validation/documentIdValidation.model')

const invalidId = {
  code: 'bad_request',
  message: 'Invalid Id',
}

const internalError = {
  code: 'internal_server_error',
  message: 'Something went wrong',
}

const getAllCentres = async (req, res) => {
  try {
    const data = await queryAll()
    res.status(200).json(data)
  } catch (err) {
    console.log(err)
    res.status(500).json(internalError)
  }
}

const getCentre = async (req, res) => {
  try {
    const { centreId } = req.params
    const validId = await idValidation.validateAsync(centreId)
    const data = await queryOne(validId)
    if (data) {
      res.status(200).json(data)
    } else {
      res.status(400).json(invalidId)
    }
  } catch (err) {
    if (err?.details) {
      console.log(err.details)
      const { message } = err.details[0]
      res.status(400).json({ code: 'bad_request', message })
    } else {
      console.log(err)
      res.status(500).json(internalError)
    }
  }
}

const deleteCentre = async (req, res) => {
  try {
    const { centreId } = req.params
    const validId = await idValidation.validateAsync(centreId)
    const data = await deleteOne(validId)
    if (data) {
      res.status(200).json(data)
    } else {
      res.status(400).json(invalidId)
    }
  } catch (err) {
    if (err?.details) {
      console.log(err.details)
      const { message } = err.details[0]
      res.status(400).json({ code: 'bad_request', message })
    } else {
      console.log(err)
      res.status(500).json(internalError)
    }
  }
}

const saveCentre = async (req, res) => {
  try {
    const { body } = req
    const validBody = await centreValidation.validateAsync(body)
    const centre = await saveOne(validBody)
    res.status(200).json({ added: centre })
  } catch (err) {
    if (err?.details) {
      console.log(err.details)
      const { message } = err.details[0]
      res.status(400).json({ code: 'bad_request', message })
    } else {
      console.log(err)
      res.status(500).json(internalError)
    }
  }
}

const updateCentre = async (req, res) => {
  try {
    const { body, params: { centreId } } = req
    const validBody = await centreValidation.validateAsync(body)
    const validId = await idValidation.validateAsync(centreId)
    const updated = await updateOne(validId, validBody)
    if (updated) {
      res.status(200).json(updated)
    } else {
      res.status(400).json(invalidId)
    }
  } catch (err) {
    if (err?.details) {
      console.log(err.details)
      const { message } = err.details[0]
      res.status(400).json({ code: 'bad_request', message })
    } else {
      console.log(err)
      res.status(500).json(internalError)
    }
  }
}

module.exports = {
  getAllCentres,
  getCentre,
  deleteCentre,
  saveCentre,
  updateCentre,
}
