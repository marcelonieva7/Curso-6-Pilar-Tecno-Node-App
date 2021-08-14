const vaccineModel = require('../../models/mongodb/vaccine.model');

const saveOne = async (data) => {
    const vaccine = new vaccineModel(data)
    try{
        const vaccineSaved = await vaccine.save()
        return vaccineSaved
    } catch(err){
        throw err;
    }
};

const queryOne = async (id) => {
    try {
        const queryById = await vaccineModel.findById(id)
        console.log(queryById)
        return queryById
    }
    catch(err) {
        throw err
    }
}

const queryAll = async () => {
    try {
        const query = await vaccineModel.find({})
        console.log(query)
        return query
    }
    catch(err) {
        throw err
    }
}

const updateOne = async (id, toUpdate) => {
    try {
        const updatevaccine = await vaccineModel.updateOne({_id: id}, toUpdate)
        const {n} = updatevaccine
        if (!n) return null
        return {"updated": toUpdate}
    }
    catch(err) {
        throw err
    }
}

const deleteOne = async (id) => {
    try {
        const {n} = await vaccineModel.deleteOne({_id: id})
        if (!n) {
            console.log("Invalid Id")
            return null
        }
        console.log(`Data deleted, ID ${id}`)
        return {"deleted": id}
    }
    catch(err) {
        console.log(err)
        throw err
    }
}

module.exports = { saveOne, queryOne, queryAll, updateOne, deleteOne };