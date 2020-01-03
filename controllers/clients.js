const clients = require('../models/clients')

const index = async(db, req, res) => {
    const results = await clients.findAll(db)
    res.render('clients/index', {clients: results})
}

const delOne = async(db, req, res) => {
    await clients.delOne(db, req.params.id)
    res.redirect('/clients')
}

const createForm = (req, res) => {
    res.render('clients/create')
}

const createProcess = async(db, req, res) => {
    await clients.create(db, req.body)
    res.redirect('/clients')
}

const updateForm = async(db, req, res) => {
    const pessoa = await clients.findById(db,req.params.id)
    res.render('clients/update', {pessoa})
}

const updateProcess = async(db, req, res) => {
    await clients.update(db, req.body, req.params.id)
    res.redirect('/clients')
}

module.exports = {
    index,
    delOne,
    createForm,
    createProcess,
    updateForm,
    updateProcess
}