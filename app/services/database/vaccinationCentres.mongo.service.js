/* eslint-disable no-console */
/* eslint-disable no-useless-catch */
const VaccinationCentreModel = require('../../models/mongodb/vaccinationCentre.model')

const saveOne = async data => {
  const vaccinationCentre = new VaccinationCentreModel(data)
  try {
    const centreSaved = await vaccinationCentre.save()
    return centreSaved
  } catch (err) {
    throw err
  }
}

const queryOne = async id => {
  try {
    const queryById = await VaccinationCentreModel.findById(id)
    console.log(queryById)
    return queryById
  } catch (err) {
    throw err
  }
}

const queryAll = async () => {
  try {
    const query = await VaccinationCentreModel.find({})
    console.log(query)
    return query
  } catch (err) {
    throw err
  }
}

const updateOne = async (id, toUpdate) => {
  try {
    const updateCentre = await VaccinationCentreModel.updateOne({ _id: id }, toUpdate)
    const { n } = updateCentre
    if (!n) return null
    return { updated: { ...toUpdate, _id: id } }
  } catch (err) {
    throw err
  }
}

const deleteOne = async id => {
  try {
    const { n } = await VaccinationCentreModel.deleteOne({ _id: id })
    if (!n) {
      console.log('Invalid Id')
      return null
    }
    console.log(`Data deleted, ID ${id}`)
    return { deleted: id }
  } catch (err) {
    console.log(err)
    throw err
  }
}

module.exports = {
  saveOne,
  queryOne,
  queryAll,
  updateOne,
  deleteOne,
}
