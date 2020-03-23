var express = require('express')
var patients = require('../data/patients')
var patientsRouter = express.Router()
var patientsController = require('../controllers/patientsController')

patientsRouter.get('/', patientsController.patients)

patientsRouter.get('/:patientID', patientsController.patient)


module.exports = patientsRouter