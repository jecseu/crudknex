const express = require('express')
const clientsController = require('../controllers/clients')

const clientsRouter = ({db}) => {
    const router = express.Router()
    router.get('/', clientsController.index.bind(null,db))
    router.get('/delete/:id', clientsController.delOne.bind(null,db))
    router.get('/create', clientsController.createForm)
    router.post('/create', clientsController.createProcess.bind(null,db))
    router.get('/update/:id', clientsController.updateForm.bind(null,db))
    router.post('/update/:id', clientsController.updateProcess.bind(null,db))

    return router   
}



module.exports = clientsRouter