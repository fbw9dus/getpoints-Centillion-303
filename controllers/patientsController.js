var patients = require('../data/patients')


function patientsController(req, res) {
    var patientID = req.params.patientID
    var patient = patients[patientID]
    res.json(patient)
}

exports.patients = function (req, res) {
    res.json(patients)
}
exports.patient = patientsController